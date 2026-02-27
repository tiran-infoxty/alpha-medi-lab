import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FormState { name: string; email: string; phone: string; message: string; }
interface ContactInfo { icon: string; title: string; details: string; }

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const contactInfo: ContactInfo[] = [
    { icon: '📱', title: 'Phone',         details: '0718227704'               },
    { icon: '📧', title: 'Email',         details: 'info@alphamedilab.lk'     },
    { icon: '⏰', title: 'Working Hours', details: 'Mon-Sat: 7:00 AM - 9:00 PM' },
  ];

  const titleClass =
    "text-4xl sm:text-[2rem] mb-8 text-[#6ba9f2] relative inline-block " +
    "after:content-[''] after:absolute after:bottom-[-10px] after:left-0 " +
    "after:w-[50px] after:h-[5px] after:bg-[#43e017] after:rounded-full";

  const btnClass =
    "px-6 py-3 bg-[#6ba9f2] text-white border-none rounded-[30px] cursor-pointer text-base font-semibold " +
    "transition-all duration-300 inline-block no-underline " +
    "hover:bg-[#43e017] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]";

  const inputClass =
    "w-full px-[15px] py-3 border border-[#cccccc] dark:border-[#333333] dark:bg-[#1e1e1e] dark:text-[#e0e0e0] " +
    "rounded-lg text-base transition-all duration-300 focus:border-[#6ba9f2] focus:outline-none";

  return (
    <section id="contact" className="px-5 py-20 sm:py-[60px] min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full" ref={ref}>
        <motion.h2
          className={titleClass}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          {/* Form */}
          <motion.div
            className="bg-white dark:bg-[#252525] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-10 rounded-[20px] shadow-[0_15px_50px_rgba(107,169,242,0.15)]"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {formSubmitted ? (
              <motion.div
                className="text-center p-[30px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-[70px] h-[70px] bg-[#43e017] text-white rounded-full flex items-center justify-center text-[2rem] mx-auto mb-5">
                  ✓
                </div>
                <h3 className="mb-[10px] text-[#6ba9f2]">Thank You!</h3>
                <p className="mb-[30px] opacity-80 dark:text-[#a0a0a0]">
                  Your message has been sent successfully. We&apos;ll get back to you shortly.
                </p>
                <button type="button" className={btnClass} onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="mb-[25px] text-[#6ba9f2] text-[1.8rem]">Get In Touch</h3>

                {([
                  { id: 'name',    label: 'Full Name',      type: 'text'  },
                  { id: 'email',   label: 'Email Address',  type: 'email' },
                  { id: 'phone',   label: 'Phone Number',   type: 'tel'   },
                ] as { id: keyof FormState; label: string; type: string }[]).map(({ id, label, type }) => (
                  <div key={id} className="mb-5">
                    <label htmlFor={id} className="block mb-2 font-medium dark:text-[#e0e0e0]">{label}</label>
                    <input
                      type={type} id={id} name={id}
                      value={formState[id]} onChange={handleChange}
                      required className={inputClass}
                    />
                  </div>
                ))}

                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 font-medium dark:text-[#e0e0e0]">Your Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={formState.message} onChange={handleChange}
                    required className={inputClass}
                  />
                </div>

                <motion.button type="submit" className={btnClass} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact info + map */}
          <motion.div
            className="flex flex-col gap-[30px]"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col gap-5">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-[15px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl text-[#6ba9f2]">{info.icon}</div>
                  <div>
                    <h4 className="mb-[5px] text-[#6ba9f2]">{info.title}</h4>
                    <p className="dark:text-[#a0a0a0]">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.28117768544!2d79.90626541904537!3d6.97148798807499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581d02273b3b%3A0xdfeddca6ff602652!2sAlpha%20Medi%20Lab!5e0!3m2!1sen!2sus!4v1749139960222!5m2!1sen!2sus"
                width="100%" height="300"
                className="rounded-[15px] overflow-hidden border-0 w-full block"
                allowFullScreen loading="lazy"
                title="Alpha Medi Lab Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
