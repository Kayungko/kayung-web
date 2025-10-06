import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectsT from './components/ProjectsT'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import BackgroundEffect from './components/BackgroundEffect'
import Orb from './components/Orb'

function App() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
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
                <p className="text-white/30 text-sm font-normal">
                  © 2025 Kayung. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App

