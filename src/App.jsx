import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import BackgroundEffect from './components/BackgroundEffect'
import Orb from './components/Orb'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <BackgroundEffect />
        
        {/* Orb 背景层 */}
        <div 
          className="fixed inset-0 z-[8] flex items-center justify-center pointer-events-none"
        >
          <div 
            className="pointer-events-none"
            style={{ 
              width: '100%', 
              height: '100vh', 
              maxWidth: '1200px', 
              maxHeight: '1200px', 
              position: 'relative'
            }}
          >
            <Orb
              hue={260}
              hoverIntensity={1.0}
              rotateOnHover={true}
              forceHoverState={false}
            />
          </div>
        </div>
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

