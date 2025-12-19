import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-gray-400 text-xs tracking-[0.2em] uppercase mb-10">Availability: Open for Opportunities</p>
        <h2 className="text-5xl md:text-8xl font-medium tracking-tighter mb-16 text-gray-900 leading-[0.9]">
            Let's build scalable <br /> AI products.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <a href="mailto:kashpiamridula@gmail.com" className="group flex items-center text-xl md:text-2xl font-light hover:text-blue-600 transition-colors">
            <span className="border-b border-gray-300 pb-1 group-hover:border-blue-600 transition-colors">kashpiamridula@gmail.com</span>
            <ArrowUpRight className="ml-3 w-6 h-6 text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </a>
          <a href="#" className="group flex items-center text-xl md:text-2xl font-light hover:text-blue-600 transition-colors">
             <span className="border-b border-gray-300 pb-1 group-hover:border-blue-600 transition-colors">LinkedIn</span>
             <ArrowUpRight className="ml-3 w-6 h-6 text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-32 pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-mono uppercase tracking-widest">
            <span>Based in Dhaka / Remote Capable</span>
            <span>+880 1794 095215</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;