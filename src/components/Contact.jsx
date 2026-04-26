import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const services = [
    "Project Development",
    "Product Design",
    "Assembling & Testing",
    "Technical Training"
  ]

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="space-y-16 lg:space-y-20">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-black text-brandOrange uppercase tracking-[0.3em] mb-4">Engagement Hub</span>
        <h2 className="text-3xl lg:text-4xl font-black text-brandNavy uppercase tracking-tight">Connect With Our Team</h2>
        <div className="w-12 h-1 bg-brandOrange mt-4 rounded-full"></div>
        <p className="mt-8 text-slate-500 text-base lg:text-lg font-semibold leading-relaxed italic">
          We’re open to collaborations, project discussions, and technical consultations. Reach out to discuss how we can support your engineering goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8 bg-white shadow-xl shadow-slate-900/5"
          >
            <h3 className="text-[10px] font-black text-brandOrange uppercase tracking-[0.3em] mb-8">Our Capabilities</h3>
            <div className="space-y-5">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-4 text-brandNavy font-bold">
                  <div className="w-7 h-7 rounded-lg bg-brandOrange/5 flex items-center justify-center text-brandOrange shadow-sm shrink-0 border border-brandOrange/10">
                    <FiCheckCircle size={12} />
                  </div>
                  <span className="text-[12px] uppercase tracking-tight">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <a href="tel:9581940289" className="card-premium p-5 flex items-center gap-5 hover:border-brandOrange transition-all group bg-white shadow-sm shadow-slate-900/5">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brandNavy text-xl group-hover:bg-brandOrange group-hover:text-white transition-all shadow-sm">
                <FiPhone />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">Voice Office</p>
                <p className="text-brandNavy font-black text-base">+91 9581940289</p>
              </div>
            </a>

            <a href="mailto:dhanaseepcbsolutions2025@gmail.com" className="card-premium p-5 flex items-center gap-5 hover:border-brandOrange transition-all group bg-white shadow-sm shadow-slate-900/5">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brandNavy text-xl group-hover:bg-brandOrange group-hover:text-white transition-all shadow-sm">
                <FiMail />
              </div>
              <div className="overflow-hidden">
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">Email Dispatch</p>
                <p className="text-brandNavy font-black text-[12px] truncate uppercase tracking-tight">dhanaseepcbsolutions2025@gmail.com</p>
              </div>
            </a>
          </div>

          <a 
            href="https://wa.me/919581940289" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full py-4 rounded-xl bg-emerald-500 text-white text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/10 active:scale-95"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp Now
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <div className="card-premium p-8 lg:p-14 bg-white shadow-2xl shadow-slate-900/5">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brandOrange/5 rounded-full blur-[100px]"></div>
            
            <h3 className="text-xl font-black text-brandNavy mb-2 uppercase tracking-tight">Direct Inquiry</h3>
            <p className="text-slate-500 text-[13px] mb-10 font-bold italic">Have a mission-critical requirement? Dispatch a priority message below.</p>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] text-slate-400 font-black uppercase ml-1 tracking-[0.2em]">Contact Identity</label>
                  <input
                    required
                    value={form.name}
                    onChange={onChange}
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brandOrange focus:bg-white focus:outline-none text-brandNavy font-bold text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-slate-400 font-black uppercase ml-1 tracking-[0.2em]">Electronic Mail</label>
                  <input
                    required
                    value={form.email}
                    onChange={onChange}
                    name="email"
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brandOrange focus:bg-white focus:outline-none text-brandNavy font-bold text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] text-slate-400 font-black uppercase ml-1 tracking-[0.2em]">Message Content</label>
                <textarea
                  value={form.message}
                  onChange={onChange}
                  name="message"
                  placeholder="Technical requirements and project scope..."
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brandOrange focus:bg-white focus:outline-none text-brandNavy font-bold text-sm transition-all"
                  rows="4"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-xl bg-brandOrange text-white text-[11px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-brandOrange/20 hover:bg-brandNavy transition-all flex items-center justify-center gap-4 relative overflow-hidden group active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Priority Dispatch <FiSend />
                </span>
              </button>

              {sent && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-[12px] text-center font-black uppercase tracking-widest"
                >
                  Inquiry Dispatched Successfully
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}