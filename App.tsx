import React from 'react';
import { Layers, Network, Search, FlaskConical, FileText, Info, Microscope, ScanSearch, Component, RefreshCw, CheckCircle } from 'lucide-react';
import StepCard from './components/StepCard';
import { 
  DataIntegrationVisual, 
  PathwayVisual, 
  LincsVisual, 
  ResultsVisual,
  ValidationVisual,
  ProximityVisual,
  StructureVisual,
  OptimizationVisual,
  PreclinicalVisual
} from './components/Visuals';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-blue-100">
      
      {/* Header / Figure Title */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-academic-blue text-white p-2 rounded">
              <Network size={24} />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                Integrative Drug Discovery Pipeline
              </h1>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                From Transcriptomics to Structural Optimization
              </p>
            </div>
          </div>
          <button className="hidden md:flex items-center text-sm font-medium text-academic-blue hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded transition-colors">
            <Info size={16} className="mr-2" />
            Methodology
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 pb-24">
        
        <div className="flex flex-col items-center w-full">
          
          {/* Introductory Abstract/Caption */}
          <div className="w-full max-w-4xl mb-10 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-sm font-bold text-gray-400 uppercase mb-2 flex items-center">
              <FileText size={16} className="mr-2" />
              Figure Legend
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-serif">
              Schematic illustration of the comprehensive workflow for identifying and optimizing therapeutic candidates. 
              The pipeline begins with (1-4) computational screening using transcriptomic data and LINCS L1000CDS<sup>2</sup>. 
              Candidate drugs undergo (5-6) mechanistic validation and target identification via proximity labeling. 
              Finally, (7-9) structural elucidation guides iterative optimization, culminating in preclinical validation within patient-derived models.
            </p>
          </div>

          {/* Step 1 */}
          <StepCard
            stepNumber={1}
            title="Data Integration & Preprocessing"
            description="Integration of multiple sets of differentially expressed genes (DEGs) from patient sample databases."
            details={[
              "Source: Public Transcriptomic Expression Datasets (e.g., GEO, Nephroseq).",
              "Subjects: Human patient samples (e.g., CKD Tubulointerstitium) vs. Healthy Controls.",
              "Output: Unified Gene Expression Matrix."
            ]}
            Icon={Layers}
          >
            <DataIntegrationVisual />
          </StepCard>

          {/* Step 2 */}
          <StepCard
            stepNumber={2}
            title="Pathway Enrichment Analysis"
            description="Identification of key signaling pathways and biological processes associated with the disease signature."
            details={[
              "Quality Control of the Disease Signature.",
              "Identification of DEGs: Log2FC > 1 (Up) or < -1 (Down).",
              "Enrichment Analysis: Focusing on fibrosis-related signaling pathways and pathological mechanisms."
            ]}
            Icon={Network}
          >
            <PathwayVisual />
          </StepCard>

          {/* Step 3 */}
          <StepCard
            stepNumber={3}
            title="In Silico Drug Screening"
            description="Drug screening using the LINCS L1000CDS² engine to match disease signatures with drug-induced profiles."
            details={[
              "Tool: LINCS L1000CDS² (Connectivity Map).",
              "Method: Pattern Matching / Inverse Signature search.",
              "Input: Up-regulated and Down-regulated disease genes.",
              "Database: Over 20,000 small molecule compounds tested on human cell lines."
            ]}
            Icon={Search}
          >
            <LincsVisual />
          </StepCard>

          {/* Step 4 */}
          <StepCard
            stepNumber={4}
            title="Candidate Drug Identification"
            description="Obtaining candidate drugs capable of significantly regulating (reversing) the differential expression observed in patient samples."
            details={[
              "Scoring: Ranking based on the ability to reverse the disease signature.",
              "Outcome: List of potential therapeutic agents for further validation.",
              "Hypothesis Generation: Compounds that down-regulate disease-up genes and up-regulate disease-down genes."
            ]}
            Icon={FlaskConical}
          >
            <ResultsVisual />
          </StepCard>

          {/* Step 5 */}
          <StepCard
            stepNumber={5}
            title="Mechanistic Validation"
            description="Experimental verification of the molecular mechanism and efficacy in multiple biological models."
            details={[
              "In Vitro Models: Disease-relevant cell lines.",
              "In Vivo Models: Mouse models of disease.",
              "Ex Vivo Models: Patient-derived organoids.",
              "Goal: Confirm that the candidate drug reverses the pathological phenotype."
            ]}
            Icon={Microscope}
          >
            <ValidationVisual />
          </StepCard>

          {/* Step 6 */}
          <StepCard
            stepNumber={6}
            title="Target Complex Identification"
            description="Identification of protein complexes bound by the candidate drug using proximity labeling technologies."
            details={[
              "Method: Proximity Labeling (e.g., BioID, APEX) or Activity-Based Protein Profiling.",
              "Mechanism: Labeling of proteins in the immediate vicinity of the drug-target complex.",
              "Outcome: Mass spectrometry identification of the interactome."
            ]}
            Icon={ScanSearch}
          >
            <ProximityVisual />
          </StepCard>

          {/* Step 7 */}
          <StepCard
            stepNumber={7}
            title="Structural Elucidation"
            description="Resolution of the drug-target complex structure using advanced structural biology techniques."
            details={[
              "Techniques: Cryo-Electron Microscopy (Cryo-EM) and X-ray Crystallography.",
              "Objective: Atomic-level visualization of the binding pocket and interaction interface.",
              "Data: High-resolution density maps and molecular models."
            ]}
            Icon={Component}
          >
            <StructureVisual />
          </StepCard>

          {/* Step 8 */}
          <StepCard
            stepNumber={8}
            title="Structure-Based Optimization"
            description="Iterative chemical optimization of the lead compound guided by structural insights."
            details={[
              "Strategy: Rational Drug Design & SAR (Structure-Activity Relationship) studies.",
              "Modifications: Improving binding affinity, selectivity, and pharmacokinetic properties.",
              "Process: Design-Make-Test-Analyze cycle."
            ]}
            Icon={RefreshCw}
          >
            <OptimizationVisual />
          </StepCard>

          {/* Step 9 */}
          <StepCard
            stepNumber={9}
            title="Preclinical Efficacy Validation"
            description="Final verification of the optimized compound in patient-derived disease models."
            details={[
              "Models: Patient-Derived Organoids (PDOs) and Patient-Derived Xenografts (PDX).",
              "Metrics: Reduction in disease biomarkers, histological improvement, and survival rates.",
              "Significance: High-fidelity prediction of clinical response."
            ]}
            Icon={CheckCircle}
            isLast={true}
          >
            <PreclinicalVisual />
          </StepCard>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 font-serif">
            Generated Schematic based on Bio-Workflow Analysis.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;