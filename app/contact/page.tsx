'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "How do I book a home collection?",
    answer: "You can book a home collection through our website, mobile app, or by calling our toll-free number. Simply select your tests, choose a convenient time slot, and our certified phlebotomist will visit your home."
  },
  {
    question: "When will I receive my reports?",
    answer: "Most routine test reports are delivered within 6-12 hours. Specialized tests may take 24-48 hours. You will receive an SMS and email notification once your report is ready for download."
  },
  {
    question: "Do I need to fast before my blood test?",
    answer: "Fasting requirements vary by test. For example, a Lipid Profile or Blood Sugar Fasting test requires 10-12 hours of fasting. Please check the specific test instructions in our directory or ask our support team."
  },
  {
    question: "How can I download my reports online?",
    answer: "Visit the 'Download Reports' section on our homepage, enter your Lab ID and registered mobile number, and verify with the OTP sent to your phone to access your digital reports."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-900 py-20 border-b border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                Have questions about a test or need assistance with your
                booking? Our team is here to help you 24/7.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Call Us
                    </h4>
                    <a
                      href="tel:+94718227704"
                      className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:underline"
                    >
                      <span>+94 71 822 7704</span>
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:support@alphamedilab.lk"
                      className="text-sm text-slate-500 dark:text-slate-400"
                    >
                      info@alphamedilab.lk{" "}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Visit Us
                    </h4>
                    <a
                      href="https://www.google.com/maps/place/Alpha+Medi+Lab/@6.9714668,79.9165437,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2581d02273b3b:0xdfeddca6ff602652!8m2!3d6.9714668!4d79.9165437!16s%2Fg%2F11c61bcv_w?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      <p>222/B Kandy Rd,</p>
                      <p>Kelaniya 11300,</p>
                      <p>Sri Lanka</p>
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Working Hours
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Monday - Saturday:
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      7am - 9pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-10">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-slate-700 transition-all"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-slate-700 transition-all"
                      placeholder="+94 7X XXX XXXX"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-slate-700 transition-all"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-slate-700 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Test Booking</option>
                    <option>Report Issue</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white dark:focus:bg-slate-700 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps?q=222/B+Kandy+Rd,+Kelaniya+11300,+Sri+Lanka&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Everything you need to know about our services and procedures.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 opacity-10 -rotate-12 -translate-x-1/2 -translate-y-1/2">
              <MessageSquare size={300} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Need immediate assistance?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Our live chat support is available 24/7 to answer your queries
                and help with bookings.
              </p>
              <button className="px-10 py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 mx-auto">
                <MessageSquare size={20} />
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}