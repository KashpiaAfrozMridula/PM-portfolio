import React from 'react';
import { SKILLS_CONTENT } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-sm font-mono font-medium uppercase tracking-[0.2em] text-gray-400 mb-6">Expertise</h2>
          <p className="text-3xl font-light text-gray-900 tracking-tight leading-snug">
            A hybrid toolkit spanning <span className="font-medium">technical engineering</span>, <span className="font-medium">security compliance</span>, and <span className="font-medium">product strategy</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-100 pt-12">
          {SKILLS_CONTENT.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-8">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-widest">{category.title}</h3>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-gray-600 font-normal leading-normal border-b border-gray-50 pb-2 last:border-0">
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-auto">
                <p className="text-[11px] font-mono text-gray-400 leading-relaxed uppercase tracking-wide">
                   // {category.whyItMatters}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;