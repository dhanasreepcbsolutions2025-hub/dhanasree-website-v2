import React from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiCpu, FiLayers, FiWifi, FiSettings, FiBookOpen, FiArrowRight } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

export default function Hero() {
  const highlights = [
    { icon: <FiLayers className="text-brandCyan" />, text: "Project Development" },
    { icon: <FiCpu className="text-brandOrange" />, text: "Product Design" },
    { icon: <FiSettings className="text-brandCyan" />, text: "Assembling and Testing" },
    { icon: <FiBookOpen className="text-brandOrange" />, text: "Technical Training" },
  ]

  return (
    <div className="hero-pattern relative overflow-hidden flex items-center min-h-screen">
      <div className="container pt-32 pb-20 lg:pt-48 lg:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brandOrange/10 border border-brandOrange/20 text-brandOrange text-[11px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl shadow-brandOrange/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandOrange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brandOrange"></span>
              </span>
              <span className="text-white font-black"> PCB Designing & Freelancer Project Works & Courses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] text-white tracking-tight"
            >
              PCB Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandCyan via-white to-brandOrange">Hardware Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-white/60 max-w-lg text-lg lg:text-xl leading-relaxed font-semibold"
            >
              We specialize in PCB designing, freelancer project works, technical training, and comprehensive embedded systems development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <a href="#contact" className="px-10 py-5 rounded-2xl bg-brandOrange text-white text-[11px] font-black uppercase tracking-[0.25em] shadow-[0_20px_50px_rgba(255,114,68,0.3)] hover:shadow-brandOrange/50 hover:-translate-y-1 transition-all flex items-center gap-4">
                Partner Now <FiArrowRight />
              </a>

              <a href="#about" className="px-10 py-5 rounded-2xl bg-transparent border-2 border-white/20 text-white text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-brandNavy transition-all">
                Discovery
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-brandCyan/20 to-brandOrange/20 blur-[100px] opacity-40"></div>

            <div className="glass-dark relative p-8 lg:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-3xl">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brandOrange/10 rounded-full blur-[80px]"></div>

              <h3 className="text-[11px] font-black text-brandOrange mb-10 flex items-center gap-3 uppercase tracking-[0.3em]">
                <span className="w-8 h-[3px] bg-brandOrange rounded-full"></span>
                Our Capabilities
              </h3>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brandCyan/40 hover:bg-white/10 hover:translate-x-2 transition-all group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-brandOrange transition-all text-white">
                      {item.icon}
                    </div>
                    <span className="text-white/90 font-bold text-[14px] tracking-tight">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}