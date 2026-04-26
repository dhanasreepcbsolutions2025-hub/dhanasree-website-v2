import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiBox, FiZap, FiSettings, FiBook } from 'react-icons/fi'

const FEATURES = [
  { 
    title: 'Industry Experience First', 
    icon: <FiBriefcase />, 
    desc: 'Our expertise is rooted in real-world industrial projects and successful collaborations across various engineering domains.',
    color: 'text-blue-400'
  },
  { 
    title: 'End-to-End Solutions', 
    icon: <FiBox />, 
    desc: 'From initial concept and design to final assembling and site deployment, we handle the entire engineering lifecycle in-house.',
    color: 'text-purple-400' 
  },
  { 
    title: 'Hands-On Expertise', 
    icon: <FiZap />, 
    desc: 'We prioritize practical implementation and rigorous testing over theoretical models, ensuring reliable performance in the field.',
    color: 'text-emerald-400'
  },
  { 
    title: 'Customized Development', 
    icon: <FiSettings />, 
    desc: 'Every solution we build is specifically tailored to meet the unique functional and technical requirements of our clients.',
    color: 'text-amber-400'
  },
  { 
    title: 'Integrated Learning', 
    icon: <FiBook />, 
    desc: 'Our training programs are directly derived from our project execution experience, providing students with actual industry insights.',
    color: 'text-rose-400'
  }
]

export default function WhyChooseUs() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-black text-brandOrange uppercase tracking-[0.3em] mb-4">Why Engineering Leaders Choose Us</span>
        <h2 className="text-3xl lg:text-4xl font-black text-brandNavy uppercase tracking-tight">The Competitive Advantage</h2>
        <div className="w-12 h-1 bg-brandOrange mt-4 rounded-full"></div>
        <p className="mt-8 text-slate-500 text-base lg:text-lg font-semibold leading-relaxed italic">
          Our commitment to practical engineering and end-to-end execution sets us apart as a trusted technology partner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FEATURES.map((f, idx) => (
          <motion.div 
            key={f.title} 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }} 
            className="card-premium group p-8 bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all"
          >
            <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brandOrange group-hover:text-white transition-all ${f.color}`}>
              {f.icon}
            </div>
            <h4 className="text-brandNavy font-black text-[15px] mb-4 tracking-tight uppercase">{f.title}</h4>
            <p className="text-slate-500 text-[13px] leading-relaxed font-medium italic">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}