
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Cpu, Bot } from 'lucide-react';

const servicesData = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies that deliver exceptional user experiences.',
    color: 'from-neuralBlue to-neuralGreen'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that engage users and extend your digital presence.',
    color: 'from-neuralGreen to-neuralYellow'
  },
  {
    icon: Code,
    title: 'Web Automation',
    description: 'Efficient automation solutions that streamline workflows and maximize productivity.',
    color: 'from-neuralYellow to-neuralOrange'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Data-driven insights and predictive models that help businesses make informed decisions.',
    color: 'from-neuralOrange to-neuralRed'
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence implementations that solve complex business challenges.',
    color: 'from-neuralRed to-neuralBlue'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-full mb-4"
          >
            <span className="text-gradient">Our Expertise</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 font-raleway"
          >
            Comprehensive <span className="text-gradient">Digital Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            We offer a wide range of services to help businesses leverage technology for growth and innovation.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 card-glow"
            >
              <div className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
