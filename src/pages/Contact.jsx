import React, { useRef, useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Environment variables from .env file
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <AnimatedPage>
      <div className="w-full min-h-screen flex justify-center items-center p-4 relative overflow-hidden">
        
        {/* Floating Shapes Background */}
        <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl -z-10"
        />
        <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10"
        />
        <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none"
        />

        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 bg-[#1e293b]/50 backdrop-blur-sm p-8 rounded-lg shadow-xl z-10 border border-gray-700">
            
            {/* Contact Info Sidebar */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-secondary text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4 mt-4">
                        I'm currently available for freelance work or full-time opportunities.
                        If you have a project that needs some creative touch, let's connect.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <p className="font-bold">Email</p>
                            <a href="mailto:panchaljay010@gmail.com" className="hover:text-primary transition-colors">panchaljay010@gmail.com</a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                            <FaPhone size={20} />
                        </div>
                        <div>
                            <p className="font-bold">Phone</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div>
                            <p className="font-bold">Location</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form Section */}
            <motion.form 
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4"
            >
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <input required className="bg-[#0f172a] text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary border border-gray-700" type="text" placeholder="Name" name="user_name" />
                <input required className="bg-[#0f172a] text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary border border-gray-700" type="email" placeholder="Email" name="user_email" />
                <textarea required className="bg-[#0f172a] text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary border border-gray-700 resize-none" name="message" rows="6" placeholder="Message"></textarea>
                
                <button 
                    disabled={status === 'sending'}
                    className={`text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-6 py-3 my-2 mx-auto flex items-center rounded-md font-bold transition-all duration-300 shadow-lg w-full justify-center ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && <p className="text-green-500 text-center">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-500 text-center">Failed to send message. Please try again.</p>}
            </motion.form>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;