'use client';

import { createContext, useContext, useState } from 'react';

type AITutorContextValue = {
  open: boolean;
  openTutor: () => void;
  closeTutor: () => void;
  toggleTutor: () => void;
};

const AITutorContext = createContext<AITutorContextValue | null>(null);

export function AITutorProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <AITutorContext.Provider
      value={{
        open,
        openTutor: () => setOpen(true),
        closeTutor: () => setOpen(false),
        toggleTutor: () => setOpen((value) => !value),
      }}
    >
      {children}
    </AITutorContext.Provider>
  );
}

export function useAITutor() {
  const context = useContext(AITutorContext);

  if (!context) {
    throw new Error('useAITutor must be used inside AITutorProvider');
  }

  return context;
}
