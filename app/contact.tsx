'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import '@types/react';
import '@types/react-dom';

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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-600 dark:text-slate-400">We're here to help</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded" />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded">Send</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border rounded">
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-4 text-left font-semibold flex justify-between items-center">
                {faq.question}
                <ChevronDown className={`transform transition ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Start a live chat with our support team</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded flex items-center justify-center gap-2 mx-auto">
            <MessageSquare size={20} />
            Start Live Chat
          </button>
        </div>
      </section>
    </div>
  );
}