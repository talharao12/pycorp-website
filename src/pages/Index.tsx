
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  useEffect(() => {
    document.title = 'PyCorp - Transforming Business Through AI';
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 md:order-1"
              >
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-r from-neuralBlue/30 to-neuralRed/30 rounded-xl filter blur-3xl opacity-60"></div>
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="text-4xl md:text-6xl font-bold font-raleway text-gradient">
                      PyCorp
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <div className="order-1 md:order-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-full mb-4"
                >
                  <span className="text-gradient">About Us</span>
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-6 font-raleway"
                >
                  Driving Digital <span className="text-gradient">Innovation</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white/70 text-lg mb-6"
                >
                  PyCorp is a forward-thinking digital solutions provider specializing in web development, 
                  app creation, automation, and cutting-edge AI technologies. Our mission is to help businesses 
                  harness the power of technology to achieve their goals and stay ahead in today's competitive landscape.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-white/70 text-lg mb-8"
                >
                  With a team of expert developers, data scientists, and AI specialists, we deliver 
                  tailored solutions that address unique business challenges and drive meaningful results.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a
                    href="#contact"
                    className="px-8 py-3 rounded-lg font-medium text-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-full mb-4"
              >
                <span className="text-gradient">Our Tech Stack</span>
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6 font-raleway"
              >
                Powered by <span className="text-gradient">Advanced Technologies</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-lg"
              >
                We utilize cutting-edge technologies to build scalable, secure, and efficient solutions.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['Python', 'React', 'TensorFlow', 'Node.js', 'Flutter', 'AWS', 'Django', 'Docker', 'MongoDB', 'GraphQL', 'PyTorch', 'Kubernetes'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-white font-medium">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
