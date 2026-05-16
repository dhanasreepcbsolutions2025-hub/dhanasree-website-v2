import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-brandNavy text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-gradient"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 px-4">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brandOrange flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-brandOrange/20">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black leading-tight uppercase tracking-widest text-white">DhanaSree</span>
                <span className="text-[11px] font-bold text-brandOrange leading-tight tracking-[0.3em] uppercase">Engineering Solutions</span>
              </div>
            </div>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-sm font-medium italic">
              Empowering global industries through precision hardware architecture and innovative engineering intelligence.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brandCyan">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Tools', 'Courses', 'Why Us'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-white/40 text-[13px] font-bold hover:text-brandOrange transition-colors uppercase tracking-widest">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brandCyan">Social Hub</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, label: 'Facebook' },
                  { icon: <FaInstagram />, label: 'Instagram' },
                  { icon: <FaLinkedinIn />, label: 'LinkedIn' }
                ].map((social, i) => (
                  <a key={i} aria-label={social.label} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-brandOrange hover:text-white transition-all border border-white/5 shadow-sm">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brandCyan">Direct Contact</h4>
              <p className="text-white/40 text-[13px] font-bold leading-relaxed tracking-wider">9581940289</p>
              <p className="text-white/40 text-[12px] font-bold leading-relaxed break-words italic tracking-tight">dhanasreepcbsolutions2025@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 px-4">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2025 DHANASREE ENGINEERING — INDUSTRIAL PRECISION
          </p>
          <div className="flex gap-8">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">INNOVATION</span>
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">RELIABILITY</span>
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">LEGACY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}