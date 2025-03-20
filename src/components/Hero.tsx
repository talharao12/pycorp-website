
import React from 'react';
import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[75vh] flex items-center pt-12 relative overflow-hidden">
      <HeroAnimation />
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-full"
            >
              <span className="text-gradient">Transforming Business Through AI</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway leading-tight"
            >
              Innovative <span className="text-gradient">Solutions</span> for Your Digital Needs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-lg"
            >
              We specialize in web development, app creation, automation, and AI technologies that help businesses thrive in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#services"
                className="px-8 py-3 rounded-lg font-medium text-center bg-gradient-to-r from-neuralBlue to-neuralGreen text-black hover:shadow-lg hover:shadow-neuralBlue/20 transition-all duration-300"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg font-medium text-center glass-morphism border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-full overflow-hidden flex items-center justify-center">
              {/* Enhanced glowing orb */}
              <div className="w-4/5 h-4/5 relative">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1], 
                    opacity: [0.8, 1, 0.8] 
                  }}
                  transition={{ 
                    duration: 4, 
                    ease: "easeInOut", 
                    repeat: Infinity 
                  }}
                >
                  <div className="w-full h-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-neuralBlue/30 filter blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-neuralGreen/30 filter blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-neuralRed/30 filter blur-xl"></div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-neuralBlue/20 to-neuralRed/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
