import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(CASE_STUDIES[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b border-gray-800 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-sm font-mono font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">Selected Works</h2>
                <p className="text-3xl md:text-4xl font-light text-white tracking-tight">Strategy, execution, and results.</p>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-gray-500 font-mono text-xs tracking-widest">3 FEATURED PROJECTS</p>
            </div>
        </div>

        <div className="">
          {CASE_STUDIES.map((study, index) => (
            <div 
              key={study.id} 
              className="border-b border-gray-800"
            >
              <button 
                onClick={() => toggleOpen(study.id)}
                className="w-full text-left py-12 flex flex-col md:flex-row justify-between items-start md:items-center bg-black focus:outline-none group hover:bg-gray-900/50 transition-colors"
              >
                <div className="flex items-start gap-8">
                    <span className="font-mono text-gray-600 text-sm mt-1">0{index + 1}</span>
                    <div className="space-y-2">
                        <span className="text-[10px] font-bold font-mono text-blue-500 uppercase tracking-[0.2em] block mb-2">{study.subtitle}</span>
                        <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tighter group-hover:text-gray-300 transition-colors">{study.title}</h3>
                    </div>
                </div>
                
                <div className="flex items-center gap-12 mt-8 md:mt-0 pl-14 md:pl-0">
                    <div className="hidden md:block text-right">
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">Impact</p>
                        <p className="text-white text-lg font-light">{study.outcome}</p>
                    </div>
                    <div className="text-white/50 group-hover:text-white transition-colors">
                        {openId === study.id ? <Minus size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}
                    </div>
                </div>
              </button>

              {/* Mobile outcome */}
              <div className="md:hidden pl-14 pb-8 text-gray-400 text-sm font-mono">
                  {study.outcome}
              </div>

              {openId === study.id && (
                <div className="pl-0 md:pl-14 pb-16 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid md:grid-cols-3 gap-12 pt-4 border-t border-gray-800/50">
                        <div className="space-y-4">
                            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">The Problem</h4>
                            <p className="text-gray-300 leading-relaxed font-light text-lg">{study.content.problem}</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">My Approach</h4>
                            <p className="text-gray-300 leading-relaxed font-light text-lg">{study.content.approach}</p>
                        </div>
                        <div className="space-y-8 bg-gray-900/30 p-6 rounded-sm">
                            <div>
                                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Execution</h4>
                                <p className="text-gray-400 leading-relaxed font-light text-sm">{study.content.execution}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-xs text-green-500 uppercase tracking-widest mb-2">Results</h4>
                                <p className="text-white leading-relaxed font-medium text-lg">{study.content.results}</p>
                            </div>
                        </div>
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;