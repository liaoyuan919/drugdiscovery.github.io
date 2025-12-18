import { LucideIcon } from 'lucide-react';

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export enum GeneRegulation {
  UP = 'UP',
  DOWN = 'DOWN'
}