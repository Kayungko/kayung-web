import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import ProjectsT from '../components/ProjectsT'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <main className="relative z-10">
        {/* 第1屏：Hero */}
        <section className="h-screen snap-start snap-always pointer-events-none">
          <Hero />
        </section>
        
        {/* 第2屏：About */}
        <section className="min-h-screen snap-start snap-always pointer-events-none">
          <About />
        </section>
        
        {/* 第3屏：Projects - K Project */}
        <section className="min-h-screen snap-start snap-always pointer-events-none">
          <Projects />
        </section>
        
        {/* 第4屏：Projects - T Project */}
        <section className="min-h-screen snap-start snap-always pointer-events-none">
          <ProjectsT />
        </section>
        
        {/* 第5屏：Contact + Footer */}
        <section className="min-h-screen snap-start snap-always pointer-events-none">
          <Contact />
          <footer className="relative z-10 border-t border-white/[0.06] pointer-events-none">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="text-center space-y-2">
                <p className="text-white/60 text-[15px] font-medium">
                  像素治愈所
                </p>
                <div className="flex items-center justify-center gap-2 text-white/30 text-sm font-normal">
                  <span>© 2025 Kayung. All rights reserved.</span>
                  <span>|</span>
                  <a 
                    href="https://beian.miit.gov.cn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white/50 transition-colors pointer-events-auto"
                  >
                    沪ICP备2025147195号
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

