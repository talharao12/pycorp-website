
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="font-raleway font-bold text-2xl text-gradient">PyCorp</span>
            </a>
            <p className="text-white/70 mb-6 max-w-xs">
              Transforming business through AI and innovative digital solutions for the modern world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">App Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Web Automation</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Machine Learning</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">AI Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} PyCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
