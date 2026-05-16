import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiCode, FiGlobe, FiServer, FiCheckCircle } from 'react-icons/fi'

const CATEGORIES = [
  {
    title: "Hardware Platforms",
    icon: <FiCpu />,
    skills: ["STM32, ESP32, Arduino", "Sensor Integration", "Motor Control"]
  },
  {
    title: "Software & Development",
    icon: <FiCode />,
    skills: ["Embedded C / C++", "Python Automation", "Firmware Dev"]
  },
  {
    title: "Communication Protocols",
    icon: <FiGlobe />,
    skills: ["UART, SPI, I2C", "CAN, Ethernet", "TCP/IP Stack"]
  },
  {
    title: "PCB Design Tools",
    icon: <FiServer />,
    skills: ["Altium", "Allegro", "OrCAD", "KiCad"]
  }
]

export default function Tools() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-black text-brandOrange uppercase tracking-[0.3em] mb-4">Technical Stack</span>
        <h2 className="text-3xl lg:text-4xl font-black text-brandNavy uppercase tracking-tight">Engineering Excellence</h2>
        <div className="w-12 h-1 bg-brandOrange mt-4 rounded-full"></div>
        <p className="mt-8 text-slate-500 text-base lg:text-lg font-semibold leading-relaxed italic">
          Powering innovation through high-performance hardware architecture and specialized communication protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="card-premium group p-8 bg-white border border-white hover:border-slate-200 transition-all hover:shadow-2xl hover:shadow-slate-200"
          >
            <div className="w-12 h-12 rounded-xl bg-brandOrange/5 flex items-center justify-center text-brandOrange text-xl mb-8 group-hover:scale-110 group-hover:bg-brandOrange group-hover:text-white transition-all shadow-sm">
              {cat.icon}
            </div>

            <h4 className="text-brandNavy font-black text-[15px] mb-6 tracking-tight uppercase border-b border-slate-50 pb-4">{cat.title}</h4>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 text-[11px] font-black uppercase tracking-widest border border-slate-100 hover:border-brandCyan hover:text-brandCyan transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}