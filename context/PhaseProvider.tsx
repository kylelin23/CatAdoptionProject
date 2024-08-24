import React, { useState } from 'react';

import PhaseContext from './PhaseContext';
import type { PhaseContextType } from './PhaseContext';
import { Phase } from '@/constants/content';

type Props = {
  children: React.ReactNode;
};

export const PhaseProvider = ({ children }: Props) => {
  const [phase, setPhase] = useState<Phase | undefined>();
  
  return (
    <PhaseContext.Provider value={{ phase, setPhase }}>
      {children}
    </PhaseContext.Provider>
  );
};
