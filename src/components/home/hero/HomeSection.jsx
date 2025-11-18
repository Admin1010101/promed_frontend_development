import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // <-- Import AnimatePresence
import wound_care_home_img from '../../../assets/images/home_bg_img_2.jpg'
import woundcare_img_1 from '../../../assets/images/main-promed-square.jpg'
import woundcare_img_2 from '../../../assets/images/register_bg_img.jpg'
import ContactModal from "./ContactModal";
import toast from 'react-hot-toast'; 
import axios from "axios"; 

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    facility: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => {
    setOpen(false);
    setFormData({
        name: "",
        facility: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        question: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, question, facility, city, state, zip } = formData;
    if (!name || !facility || !city || !state || !zip || !phone || !email || !question) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/v1/contact-us/',
        formData
      );
      toast.success("Your message has been sent. We'll get back to you soon!");
      
      handleClose(); 
    } catch (error) {
      console.error(
        "Failed to send message:",
        error.response?.data || error.message
      );
      toast.error("Failed to send message. Please try again.");
    }
  };
  // Framer Motion Variants for Staggered Entrance (rest of the component logic)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.3,   
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 20 
      } 
    },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Intro section with animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 
            dark:bg-gradient-to-br dark:from-transparent dark:via-teal-400/10 dark:to-teal-600/30
            bg-gradient-to-br from-teal-600 via-teal-100 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute block w-1 h-1 bg-teal-600 dark:bg-teal-300 rounded-full opacity-40"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight + 200,
                scale: 0,
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
                scale: 1,
              }}
              transition={{
                duration: 2 + Math.random() * 1.5,
                repeat: Infinity,
                delay: Math.random(),
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-16">

          {/* Text column */}
          <motion.div
            className="flex flex-col items-center text-center lg:text-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Title row */}
            <div className="flex items-center justify-center gap-6 flex-wrap">

              {/* "ProMed Health" sliding from left */}
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg whitespace-nowrap"
                variants={{
                  hidden: { opacity: 0, x: "-100vw" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.65, ease: "easeOut" }
                  }
                }}
              >
                ProMed Health
              </motion.span>

              {/* "Plus" sliding from top */}
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-teal-500 dark:text-teal-400 drop-shadow-lg whitespace-nowrap"
                variants={{
                  hidden: { opacity: 0, y: "-100vw" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: "easeOut" }
                  }
                }}
              >
                Plus
              </motion.span>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-neutral-400 dark:text-gray-300 text-lg sm:text-xl md:text-2xl mt-8 drop-shadow-xl max-w-lg"
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
              }}
            >
              Advancing Wound Care for a New Generation
            </motion.p>
            
          </motion.div>

          {/* Image column (next to title) */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400/20 blur-3xl rounded-full" />
              
              <img
                src={woundcare_img_1}
                className="relative z-10 size-96 dark:opacity-80 object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>
          </motion.div>
            
        </div>
      </section>
      
      <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-32 overflow-hidden flex items-center min-h-screen"> 
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={wound_care_home_img}
            alt="Medical professionals working on wound care"
            className="w-full h-full object-cover object-right" 
          />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gray-900/20 dark:bg-gray-900/60"></div>
        <motion.div 
          className="lg:w-3/4 xl:w-2/4 relative z-10 py-16" 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm shadow-2xl"> 
            <motion.h1 
              className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg"
              variants={itemVariants}
            >
              Promed Health <span className="text-teal-400">Plus</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-200 text-lg md:text-xl leading-snug mt-2 ML-2 max-w-lg drop-shadow-md"
              variants={itemVariants}
            >
              {''}Built For The Next Generation Of Care...
            </motion.p>
            
            <motion.button
              onClick={handleOpen}
              className="px-10 py-4 bg-teal-600 text-white rounded-full inline-block mt-8 font-bold text-sm uppercase tracking-wider hover:bg-teal-700 transition-colors duration-300 shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
      
      <AnimatePresence>
        {open && (
            <ContactModal 
              open={open} 
              handleClose={handleClose} 
              formData={formData} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit}
            />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;