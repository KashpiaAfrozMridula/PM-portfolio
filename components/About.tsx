import React from 'react';
import { Check } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Who I Am */}
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 sticky top-32">Who I Am</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            {ABOUT_CONTENT.whoIAm.map((para, idx) => (
              <p key={idx} className="text-2xl md:text-3xl text-gray-800 font-light leading-tight tracking-tight">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 sticky top-32">Philosophy</h2>
          </div>
          <div className="md:col-span-8 grid gap-8">
            {ABOUT_CONTENT.philosophy.map((para, idx) => (
              <div key={idx} className="border-l border-gray-200 pl-8 py-2">
                <p className="text-lg text-gray-600 font-normal leading-relaxed">
                  {para}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Teams Like Me */}
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 sticky top-32">The Value</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-6">
              {ABOUT_CONTENT.whyMe.map((item, idx) => (
                <li key={idx} className="flex items-start group">
                  <span className="mr-6 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-gray-400 group-hover:border-black group-hover:text-black transition-colors">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span className="text-xl text-gray-800 font-light tracking-tight group-hover:text-black transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;