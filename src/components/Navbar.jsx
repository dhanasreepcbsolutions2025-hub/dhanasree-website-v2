import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tools', href: '#tools' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 transition-all duration-500"
    >
      <div className="container py-4">
        <div className="glass rounded-[1.2rem] border border-white/50 px-6 py-2 flex items-center justify-between shadow-xl shadow-slate-950/5 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brandOrange to-[#ff916a] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-brandOrange/20 text-center">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-brandNavy leading-tight uppercase tracking-widest">DhanaSree</span>
              <span className="text-[10px] font-bold text-brandOrange leading-tight tracking-[0.2em] uppercase">Engineering</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-black text-slate-500 hover:text-brandCyan uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-xl bg-brandOrange text-white text-[11px] font-black uppercase tracking-widest hover:bg-brandNavy transition-all shadow-lg shadow-brandOrange/20 active:scale-95"
            >
              Enroll Now
            </a>
          </div>

          <button className="lg:hidden p-2 text-brandNavy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 w-full px-6 lg:hidden"
          >
            <div className="glass-dark rounded-[2.5rem] p-8 flex flex-col gap-6 shadow-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black text-white/70 hover:text-white uppercase tracking-[0.2em] py-4 border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:9581940289" 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 mt-2 rounded-[1.2rem] bg-blue-600 text-white text-xs font-black uppercase tracking-widest text-center shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-3"
              >
                <FiPhone /> Contact Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}