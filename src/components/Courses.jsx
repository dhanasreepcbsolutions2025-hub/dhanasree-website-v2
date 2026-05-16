import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiTarget, FiUsers, FiTool, FiCheckCircle, FiAward } from 'react-icons/fi'

const FOCUS_AREAS = [
  "PCB Design & Fabrication",
  "Embedded Systems Programming",
  "IoT Application Development",
  "Microcontroller-Based Projects",
  "Real-Time Project Implementation"
]

const APPROACH = [
  { title: "Practical Sessions", desc: "Hands-on training with real physical hardware and components.", icon: <FiCpu /> },
  { title: "Project-Based Learning", desc: "Curriculum designed around solving real engineering challenges.", icon: <FiTarget /> },
  { title: "Expert Guidance", desc: "Learn directly from working professionals with industry tenure.", icon: <FiUsers /> },
  { title: "Industry Toolsets", desc: "Master the tools and workflows used in modern engineering firms.", icon: <FiTool /> }
]

export default function Courses() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-black text-brandOrange uppercase tracking-[0.3em] mb-4">Academic Initiatives</span>
        <h2 className="text-3xl lg:text-4xl font-black text-brandNavy uppercase tracking-tight">Project-Oriented Learning</h2>
        <div className="w-12 h-1 bg-brandOrange mt-4 rounded-full"></div>
        <p className="mt-8 text-slate-500 text-base lg:text-lg font-semibold leading-relaxed italic">
          Bridging the gap between engineering theory and industrial grade implementation through hands-on technical training.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4"
        >
          <div className="card-premium p-8 bg-white shadow-xl shadow-slate-200/50">
            <h3 className="text-[11px] font-black text-brandOrange mb-8 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-brandOrange"></span>
              Core Focus
            </h3>
            <div className="space-y-5">
              {FOCUS_AREAS.map((f, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-brandOrange/5 flex items-center justify-center text-brandOrange group-hover:bg-brandOrange group-hover:text-white transition-all shadow-sm">
                    <FiCheckCircle size={14} />
                  </div>
                  <span className="text-brandNavy font-bold text-[13px] tracking-tight uppercase">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-premium p-10 bg-white"
          >
            <h3 className="text-xl font-black text-brandNavy mb-8 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-[3px] bg-brandCyan rounded-full"></span>
              Strategic Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {APPROACH.map((a, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brandNavy text-lg shadow-sm shrink-0">
                    {a.icon}
                  </div>
                  <div>
                    <h4 className="text-brandNavy font-black text-[13px] mb-1 tracking-tight uppercase">{a.title}</h4>
                    <p className="text-slate-500 text-[12px] leading-relaxed font-semibold italic">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 lg:p-10 rounded-[2.5rem] bg-brandNavy text-white shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brandOrange/10 rounded-full blur-[100px]"></div>
            <div className="relative flex flex-col sm:flex-row gap-8 items-center">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl shrink-0 border border-white/10 group-hover:scale-110 group-hover:bg-brandOrange transition-all">
                <FiAward />
              </div>
              <div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-wider text-brandCyan">The Professional Outcome</h3>
                <p className="text-white/70 text-[13px] leading-relaxed font-medium italic">
                  Graduates acquire the high-stakes engineering proficiency required to lead projects and solve complex industrial problems with structural precision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}