import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tools from './components/Tools'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-brandNavy font-sans selection:bg-brandOrange/10 selection:text-brandOrange">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>

        <section id="about" className="py-20 bg-white relative overflow-hidden">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="tools" className="py-20 bg-brandSlate">
          <div className="container">
            <Tools />
          </div>
        </section>

        <section id="courses" className="py-20 bg-white">
          <div className="container">
            <Courses />
          </div>
        </section>

        <section id="why" className="py-24 bg-brandSlate relative overflow-hidden">
          <div className="container">
            <WhyChooseUs />
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App