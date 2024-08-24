import React from 'react';

import { Phase } from '@/constants/content';

export type PhaseContextType = {
  phase: Phase | undefined,
  setPhase: (phase: Phase) => void
};

const PhaseContext = React.createContext<PhaseContextType>({phase: undefined, setPhase: () => { console.log("Error"); }});

export default PhaseContext;
