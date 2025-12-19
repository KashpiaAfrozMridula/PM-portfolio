import React from 'react';
import { EXPERIENCE_CONTENT } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono font-medium uppercase tracking-[0.2em] text-gray-400 mb-20">Professional History</h2>
        
        <div className="space-y-0 divide-y divide-gray-200 border-t border-b border-gray-200">
          {EXPERIENCE_CONTENT.map((item, idx) => (
            <div key={idx} className="group grid md:grid-cols-12 gap-8 py-12 hover:bg-white transition-colors duration-500 -mx-6 px-6 md:px-0 md:mx-0">
              {/* Date & Company */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">{item.company}</h3>
                <p className="text-sm text-gray-500 font-medium">{item.role}</p>
                <p className="text-xs font-mono text-gray-400 mt-4 uppercase tracking-wider">{item.period}</p>
              </div>

              {/* Highlights */}
              <div className="md:col-span-8">
                <ul className="space-y-4">
                  {item.highlights.map((highlight, hIdx) => {
                    const parts = highlight.split(/(\d+%|\d+K\+|\$\d+K\+|\d+)/g);
                    return (
                      <li key={hIdx} className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                        <span className="inline-block w-2 h-2 rounded-full bg-gray-200 mr-4 group-hover:bg-blue-600 transition-colors mb-0.5"></span>
                        {parts.map((part, i) => (
                          part.match(/(\d+%|\d+K\+|\$\d+K\+|\d+)/) 
                            ? <span key={i} className="font-semibold text-gray-900">{part}</span> 
                            : part
                        ))}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;