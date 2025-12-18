import React from 'react';
import { Database, ArrowRight, ArrowDown, Activity, Scan, Atom, Repeat, BarChart3, Microscope } from 'lucide-react';

// Visualization for Step 1: Database Integration
export const DataIntegrationVisual: React.FC = () => (
  <div className="flex items-center justify-around w-full py-4">
    <div className="flex flex-col items-center">
      <div className="flex space-x-2 mb-2">
        <div className="flex flex-col items-center p-2 bg-white border border-gray-200 rounded shadow-sm">
          <Database className="text-blue-600 mb-1" size={20} />
          <span className="text-[10px] font-bold text-gray-600">GEO</span>
        </div>
        <div className="flex flex-col items-center p-2 bg-white border border-gray-200 rounded shadow-sm">
          <Database className="text-red-600 mb-1" size={20} />
          <span className="text-[10px] font-bold text-gray-600">Nephroseq</span>
        </div>
      </div>
      <span className="text-xs text-gray-500 mt-1">Public Datasets</span>
    </div>

    <ArrowRight className="text-gray-400" />

    <div className="flex flex-col items-center">
      {/* Mini Heatmap representation */}
      <div className="grid grid-cols-4 gap-0.5 p-1 bg-white border border-gray-300">
        {[...Array(16)].map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-red-400' : 'bg-blue-400'} opacity-80`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500 mt-1">Merged Expression Matrix</span>
    </div>
  </div>
);

// Visualization for Step 2: Pathway Analysis
export const PathwayVisual: React.FC = () => (
  <div className="flex items-center justify-center py-4 space-x-8">
     <div className="text-center">
        <div className="relative w-24 h-24 mx-auto">
          {/* Simple Circle Packing Simulation */}
          <div className="absolute top-0 left-2 w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-[8px] text-center">Fibrosis</div>
          <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-[8px] text-center">Inflammation</div>
          <div className="absolute bottom-1 left-1 w-8 h-8 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-[8px] text-center">Metabolic</div>
          <div className="absolute top-4 right-1 w-9 h-9 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-[8px] text-center">Cell Cycle</div>
        </div>
        <span className="text-xs text-gray-500 font-medium">Enrichment Clusters</span>
     </div>
     <div className="h-16 w-px bg-gray-300"></div>
     <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Activity size={16} className="text-red-500" />
          <span className="text-xs text-gray-700">Fibrosis-related Signaling</span>
        </div>
        <div className="flex items-center space-x-2">
          <Activity size={16} className="text-blue-500" />
          <span className="text-xs text-gray-700">Immune Response</span>
        </div>
     </div>
  </div>
);

// Visualization for Step 3: LINCS L1000 Matching (The core concept)
export const LincsVisual: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4 bg-white rounded p-4">
    {/* Disease Signature */}
    <div className="flex flex-col items-center">
      <h5 className="text-xs font-serif font-bold mb-2 text-academic-accent">Disease Signature (Input)</h5>
      <div className="flex space-x-1">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-red-500 text-white text-[10px] flex items-center justify-center font-bold mb-1">UP</div>
          <span className="text-[10px] text-gray-500">Gene A</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold mb-1">DOWN</div>
          <span className="text-[10px] text-gray-500">Gene B</span>
        </div>
      </div>
    </div>

    {/* The Matching Logic */}
    <div className="flex flex-col items-center px-4">
      <span className="text-xs font-bold text-gray-400 uppercase mb-1">Pattern Matching</span>
      <div className="h-0.5 w-16 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mb-1"></div>
      <span className="text-[10px] text-gray-500 italic">"Reverse Signature"</span>
      <ArrowRight className="text-gray-400 mt-1" />
    </div>

    {/* Drug Signature */}
    <div className="flex flex-col items-center">
      <h5 className="text-xs font-serif font-bold mb-2 text-green-600">Drug Candidates (Library)</h5>
      <div className="flex space-x-1">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold mb-1 border-2 border-green-400">DOWN</div>
          <span className="text-[10px] text-gray-500">Gene A</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-red-500 text-white text-[10px] flex items-center justify-center font-bold mb-1 border-2 border-green-400">UP</div>
          <span className="text-[10px] text-gray-500">Gene B</span>
        </div>
      </div>
    </div>
  </div>
);

// Visualization for Step 4: Results
export const ResultsVisual: React.FC = () => (
  <div className="w-full">
    <div className="bg-white border border-gray-200 rounded overflow-hidden">
      <div className="bg-gray-100 px-3 py-2 border-b border-gray-200 flex justify-between">
        <span className="text-xs font-bold text-gray-600">Candidate Drug</span>
        <span className="text-xs font-bold text-gray-600">Reversal Score</span>
      </div>
      {[
        { name: 'Candidate Drug A', score: '-0.95', color: 'bg-green-100' },
        { name: 'Candidate Drug B', score: '-0.88', color: 'bg-white' },
        { name: 'Candidate Drug C', score: '-0.82', color: 'bg-white' },
      ].map((drug, i) => (
        <div key={i} className={`flex justify-between px-3 py-2 ${drug.color} border-b border-gray-100 last:border-0`}>
          <span className="text-xs text-gray-800 font-medium flex items-center">
            <div className="w-2 h-2 rounded-full bg-academic-blue mr-2"></div>
            {drug.name}
          </span>
          <span className="text-xs font-mono text-green-600 font-bold">{drug.score}</span>
        </div>
      ))}
    </div>
    <p className="text-[10px] text-gray-400 mt-2 text-center italic">*Negative score indicates signature reversal</p>
  </div>
);

// Visualization for Step 5: In Vitro/Vivo Validation
export const ValidationVisual: React.FC = () => (
  <div className="flex items-center justify-around w-full py-4">
    <div className="flex flex-col items-center group">
      <div className="w-12 h-12 rounded-full bg-pink-50 border-2 border-pink-200 flex items-center justify-center mb-2 shadow-sm">
        <Microscope className="text-pink-600" size={20} />
      </div>
      <span className="text-[10px] font-bold text-gray-600 uppercase">Cells</span>
    </div>
    <div className="text-gray-300 text-xl font-light">+</div>
    <div className="flex flex-col items-center group">
      <div className="w-12 h-12 rounded-full bg-stone-50 border-2 border-stone-200 flex items-center justify-center mb-2 shadow-sm">
        <div className="text-xl">🐭</div>
      </div>
      <span className="text-[10px] font-bold text-gray-600 uppercase">Mouse Model</span>
    </div>
    <div className="text-gray-300 text-xl font-light">+</div>
    <div className="flex flex-col items-center group">
      <div className="w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-200 flex items-center justify-center mb-2 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-teal-400 to-transparent"></div>
        <Activity className="text-teal-600" size={20} />
      </div>
      <span className="text-[10px] font-bold text-gray-600 uppercase">Organoids</span>
    </div>
  </div>
);

// Visualization for Step 6: Proximity Labeling
export const ProximityVisual: React.FC = () => (
  <div className="flex items-center justify-center w-full py-6 relative">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
    
    <div className="relative flex items-center justify-center">
      {/* Central Complex */}
      <div className="relative z-10 w-16 h-16 bg-academic-blue rounded-full flex items-center justify-center shadow-lg border-4 border-white">
        <span className="text-white font-bold text-xs text-center leading-tight">Drug<br/>Target</span>
        {/* Radiating Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping opacity-75"></div>
      </div>
      
      {/* Connecting Lines */}
      <div className="absolute w-32 h-0.5 bg-gray-300 rotate-45 transform"></div>
      <div className="absolute w-32 h-0.5 bg-gray-300 -rotate-45 transform"></div>
      
      {/* Interacting Proteins */}
      <div className="absolute top-[-40px] right-[-30px] w-10 h-10 bg-yellow-100 border-2 border-yellow-400 rounded-full flex items-center justify-center z-10 shadow-sm">
        <span className="text-[8px] font-bold text-yellow-800">Prey 1</span>
      </div>
      <div className="absolute bottom-[-40px] left-[-30px] w-10 h-10 bg-purple-100 border-2 border-purple-400 rounded-full flex items-center justify-center z-10 shadow-sm">
        <span className="text-[8px] font-bold text-purple-800">Prey 2</span>
      </div>
      
      {/* Label Tag */}
      <div className="absolute -bottom-10 bg-white px-2 py-1 rounded shadow text-[9px] border border-gray-200 text-gray-500">
        Biotinylation Radius
      </div>
    </div>
  </div>
);

// Visualization for Step 7: Structural Biology
export const StructureVisual: React.FC = () => (
  <div className="flex items-center justify-center w-full py-4 gap-8">
     <div className="flex flex-col items-center">
        <div className="bg-slate-800 p-3 rounded-lg shadow-inner mb-2">
            <Scan className="text-cyan-400 animate-pulse" size={32} />
        </div>
        <span className="text-[10px] font-mono text-gray-500">Cryo-EM Map</span>
     </div>
     
     <ArrowRight className="text-gray-300" />
     
     <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 border-2 border-gray-200 rounded-lg bg-white flex items-center justify-center">
            <Atom className="text-indigo-600" size={40} />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
        </div>
        <span className="text-[10px] font-mono text-gray-500 mt-1">3D Complex</span>
     </div>
  </div>
);

// Visualization for Step 8: Optimization
export const OptimizationVisual: React.FC = () => (
  <div className="flex items-center justify-center w-full py-4">
    <div className="relative w-full max-w-[200px] aspect-[2/1] flex items-center justify-center">
       {/* Cycle Arrows */}
       <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full opacity-50"></div>
       <div className="absolute top-0 bg-white px-2">
          <span className="text-[10px] font-bold text-academic-blue uppercase">Structure</span>
       </div>
       <div className="absolute bottom-0 bg-white px-2">
          <span className="text-[10px] font-bold text-academic-blue uppercase">Design</span>
       </div>
       
       <div className="z-10 bg-white p-3 rounded-lg shadow-md border border-green-100 flex items-center space-x-2">
          <Repeat className="text-green-600" size={24} />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-800">SAR Cycle</span>
            <span className="text-[9px] text-gray-500">Iterative Refinement</span>
          </div>
       </div>
    </div>
  </div>
);

// Visualization for Step 9: Preclinical
export const PreclinicalVisual: React.FC = () => (
  <div className="w-full flex justify-center py-2">
    <div className="w-full max-w-xs bg-white p-4 rounded border border-gray-200">
        <div className="flex justify-between items-end h-24 gap-4 mb-2 border-b border-gray-300 pb-1">
            {/* Control Bar */}
            <div className="w-1/3 bg-gray-300 h-full rounded-t relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-500">100%</div>
                <span className="absolute bottom-1 w-full text-center text-[8px] text-white font-bold">Vehicle</span>
            </div>
            {/* Initial Drug Bar */}
            <div className="w-1/3 bg-blue-300 h-[60%] rounded-t relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-blue-600">60%</div>
                <span className="absolute bottom-1 w-full text-center text-[8px] text-white font-bold">Lead</span>
            </div>
            {/* Optimized Drug Bar */}
            <div className="w-1/3 bg-green-500 h-[20%] rounded-t relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-green-700">20%</div>
                <span className="absolute bottom-1 w-full text-center text-[8px] text-white font-bold">Optimized</span>
            </div>
        </div>
        <div className="flex justify-between items-center mt-2">
            <span className="text-xs font-serif font-bold text-gray-700">Disease Phenotype</span>
            <BarChart3 className="text-gray-400" size={14} />
        </div>
        <p className="text-[9px] text-gray-400 mt-1 italic text-right">Patient-Derived Models (PDX/PDO)</p>
    </div>
  </div>
);