import React from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 mb-20 text-center">Operational Framework</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Connector Line (Desktop) */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-4 left-1/2 w-full h-[1px] bg-gray-200 -z-0"></div>
              )}
              
              <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-8 z-10 group-hover:border-[#100B28] group-hover:bg-[#100B28] group-hover:text-white transition-all duration-300">
                <span className="font-mono font-medium text-xs">{idx + 1}</span>
              </div>
              
              <h3 className="text-lg font-bold mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{step.description}</p>
              
              {/* Mobile Arrow */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="md:hidden mt-8 text-gray-300">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;