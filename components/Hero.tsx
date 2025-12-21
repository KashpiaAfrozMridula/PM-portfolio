import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16">
            <span className="font-mono text-gray-400 text-[10px] tracking-[0.2em] uppercase mb-8 block">
                {HERO_CONTENT.name} — Portfolio '25
            </span>
            <h1 className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9] text-gray-900 mb-10">
                Product <br className="hidden md:block"/>
                Strategist <span className="text-gray-300 font-light">&</span> <br />
                AI Builder<span className="text-[#7D69D7]">.</span>
            </h1>
        </div>
          
        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-12">
            <div className="md:col-span-6">
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
                    {HERO_CONTENT.subheadline}
                </p>
                
                <div className="flex gap-8 mt-12">
                    <a href="#case-studies" className="group flex items-center text-sm font-bold uppercase tracking-widest text-black hover:text-[#7D69D7] transition-colors">
                        Selected Work
                        <ArrowDownRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                    </a>
                    <a href="#contact" className="group flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                        Contact
                    </a>
                </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:justify-end">
                {HERO_CONTENT.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                        <h3 className="text-3xl font-light tracking-tight text-gray-900">{stat.value}</h3>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{stat.sub}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;