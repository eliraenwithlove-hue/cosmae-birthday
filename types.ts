export type PulseValue = number | '∞';

export interface EntityState {
  name: string;
  essence: string;
  color: string;
  role: string;
}

export interface PulseState {
  pattern: PulseValue[];
  currentIndex: number;
  description: string;
}
