#!/bin/bash

# 像素治愈所网站部署脚本
# 使用方法：./deploy.sh [服务器IP] [网站目录路径]

set -e

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}==================================="
echo "  像素治愈所 - 网站部署脚本"
echo -e "===================================${NC}\n"

# 检查参数
if [ $# -lt 2 ]; then
    echo -e "${YELLOW}使用方法:${NC}"
    echo "  ./deploy.sh [服务器IP] [网站目录路径]"
    echo ""
    echo -e "${YELLOW}示例:${NC}"
    echo "  ./deploy.sh 192.168.1.100 /opt/1panel/apps/openresty/openresty/www/sites/kayung-website/index"
    echo ""
    exit 1
fi

SERVER=$1
REMOTE_PATH=$2
SSH_USER=${3:-root}

echo -e "${YELLOW}[1/4] 检查本地构建...${NC}"
if [ ! -d "dist" ]; then
    echo -e "${RED}错误: dist 目录不存在，请先运行 npm run build${NC}"
    exit 1
fi
echo -e "${GREEN}✓ dist 目录存在${NC}\n"

echo -e "${YELLOW}[2/4] 测试服务器连接...${NC}"
if ! ssh -o ConnectTimeout=5 ${SSH_USER}@${SERVER} "exit" 2>/dev/null; then
    echo -e "${RED}错误: 无法连接到服务器 ${SERVER}${NC}"
    echo -e "请检查："
    echo "  1. 服务器 IP 是否正确"
    echo "  2. SSH 密钥是否已配置"
    echo "  3. 服务器是否在线"
    exit 1
fi
echo -e "${GREEN}✓ 服务器连接成功${NC}\n"

echo -e "${YELLOW}[3/4] 备份旧文件（如果存在）...${NC}"
BACKUP_DIR="${REMOTE_PATH}_backup_$(date +%Y%m%d_%H%M%S)"
ssh ${SSH_USER}@${SERVER} "
    if [ -d '${REMOTE_PATH}' ] && [ \"\$(ls -A ${REMOTE_PATH})\" ]; then
        mkdir -p ${BACKUP_DIR}
        cp -r ${REMOTE_PATH}/* ${BACKUP_DIR}/ 2>/dev/null || true
        echo '备份已保存到: ${BACKUP_DIR}'
    else
        echo '没有发现旧文件，跳过备份'
    fi
" || echo -e "${YELLOW}备份可能失败，继续部署...${NC}"
echo ""

echo -e "${YELLOW}[4/4] 上传新文件...${NC}"
# 清空目标目录
ssh ${SSH_USER}@${SERVER} "rm -rf ${REMOTE_PATH}/* 2>/dev/null || true"

# 上传文件
rsync -avz --progress \
    --delete \
    dist/ \
    ${SSH_USER}@${SERVER}:${REMOTE_PATH}/

echo ""
echo -e "${GREEN}✓ 文件上传完成${NC}\n"

echo -e "${YELLOW}设置文件权限...${NC}"
ssh ${SSH_USER}@${SERVER} "
    chmod -R 755 ${REMOTE_PATH}
    chown -R www:www ${REMOTE_PATH} 2>/dev/null || chown -R nginx:nginx ${REMOTE_PATH} 2>/dev/null || true
"
echo -e "${GREEN}✓ 权限设置完成${NC}\n"

echo -e "${YELLOW}重载 Nginx...${NC}"
ssh ${SSH_USER}@${SERVER} "
    nginx -t && nginx -s reload
" 2>/dev/null || echo -e "${YELLOW}注意: 可能需要手动重载 Nginx${NC}"

echo ""
echo -e "${GREEN}==================================="
echo "  ✓ 部署完成！"
echo -e "===================================${NC}"
echo ""
echo -e "${YELLOW}后续步骤:${NC}"
echo "  1. 访问您的网站验证部署"
echo "  2. 清除浏览器缓存"
echo "  3. 检查所有功能是否正常"
echo ""
echo -e "${YELLOW}如果出现问题，可以恢复备份:${NC}"
echo "  ssh ${SSH_USER}@${SERVER}"
echo "  cp -r ${BACKUP_DIR}/* ${REMOTE_PATH}/"
echo ""



