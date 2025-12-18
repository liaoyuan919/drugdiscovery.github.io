import React, { useState } from 'react';
import { LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
  Icon: LucideIcon;
  children?: React.ReactNode;
  isLast?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ 
  stepNumber, 
  title, 
  description, 
  details, 
  Icon, 
  children,
  isLast = false
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl relative z-10">
      {/* Card Container */}
      <div className={`
        w-full bg-white border-l-4 border-academic-blue rounded-r-lg shadow-md 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        ${isExpanded ? 'mb-8' : 'mb-4'}
      `}>
        {/* Header Section */}
        <div 
          className="flex items-start p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex-shrink-0 mr-6">
            <div className="w-16 h-16 bg-academic-lightBlue rounded-full flex items-center justify-center border-2 border-academic-blue text-academic-blue">
              <Icon size={32} strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                <span className="text-academic-blue mr-2">Step {stepNumber}.</span> 
                {title}
              </h3>
              <button className="text-gray-400 hover:text-academic-blue transition-colors">
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <p className="text-gray-600 font-sans leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-6 pb-6 pl-28 animate-in fade-in duration-300">
             {/* Text Details */}
            <ul className="list-disc space-y-2 text-sm text-gray-700 font-sans mb-6 pl-4 border-l-2 border-gray-100">
              {details.map((detail, idx) => (
                <li key={idx} className="pl-1">{detail}</li>
              ))}
            </ul>

            {/* Visual Visualization Area (Dynamic Children) */}
            {children && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Schematic Visualization</h4>
                {children}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Connecting Arrow (CSS Triangle/Line) */}
      {!isLast && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 flex flex-col items-center justify-center z-0">
          <div className="w-0.5 h-full bg-gray-300"></div>
          <div className="w-3 h-3 border-r-2 border-b-2 border-gray-300 transform rotate-45 -mt-1"></div>
        </div>
      )}
    </div>
  );
};

export default StepCard;