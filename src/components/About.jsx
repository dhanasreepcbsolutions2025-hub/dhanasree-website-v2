import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiActivity, FiLayers, FiSearch, FiTarget, FiEye, FiZap, FiSettings } from 'react-icons/fi'

export default function About() {
  const COMPETENCIES = [
    {
      icon: <FiCpu />,
      title: "Custom Embedded Systems",
      desc: "High-performance architecture tailored for industrial precision."
    },
    {
      icon: <FiActivity />,
      title: "Real-time Execution",
      desc: "Complex mission-critical projects for strategic partners."
    },
    {
      icon: <FiLayers />,
      title: "Prototyping & Assembly",
      desc: "End-to-end validation and rapid manufacturing support."
    }
  ]

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Header section with Reference-style indicator */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-black text-brandOrange uppercase tracking-[0.3em] mb-4">Corporate Identity</span>
        <h2 className="text-3xl lg:text-4xl font-black text-brandNavy uppercase tracking-tight">Architecting the Future</h2>
        <div className="w-12 h-1 bg-brandOrange mt-4 rounded-full"></div>
        <p className="mt-8 text-slate-500 text-base lg:text-lg font-semibold leading-relaxed italic">
          We are a team of visionary engineers dedicated to bridging the gap between imaginative concepts and high-stakes industrial implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Competencies with Card Premium styling */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="card-premium p-8 lg:p-10 bg-white shadow-xl shadow-slate-200/50">
            <h3 className="text-[11px] font-black text-brandOrange mb-8 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-brandOrange"></span>
              Core Competencies
            </h3>
            <div className="space-y-5">
              {COMPETENCIES.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-brandOrange/5 flex items-center justify-center text-brandOrange text-lg shrink-0 group-hover:bg-brandOrange group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-brandNavy font-black text-[14px] mb-1 tracking-tight uppercase">{item.title}</h4>
                    <p className="text-slate-500 text-[12px] leading-relaxed font-medium italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Vision/Mission with Navy styling */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-brandNavy text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brandOrange/10 rounded-full blur-[80px]"></div>
            <h3 className="text-[11px] font-black text-brandCyan mb-6 uppercase tracking-[0.3em]">The Visionary Mission</h3>
            <p className="text-white/70 text-lg lg:text-xl font-bold leading-relaxed italic border-l-4 border-brandOrange pl-8">
              "Our mission is to empower global businesses through precision-engineered technology solutions and industry-standard pedagogical excellence."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-premium p-8 bg-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-brandCyan/10 flex items-center justify-center text-brandCyan mb-6 text-xl">
                <FiZap />
              </div>
              <h4 className="text-brandNavy font-black text-sm mb-3 uppercase tracking-wider">Reliable Systems</h4>
              <p className="text-slate-500 text-[12px] leading-relaxed font-medium italic">Scalable architectures and robust designs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-premium p-8 bg-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 flex items-center justify-center text-brandOrange mb-6 text-xl">
                <FiSettings />
              </div>
              <h4 className="text-brandNavy font-black text-sm mb-3 uppercase tracking-wider">Rapid Prototyping</h4>
              <p className="text-slate-500 text-[12px] leading-relaxed font-medium italic">From concept to field-ready hardware.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}