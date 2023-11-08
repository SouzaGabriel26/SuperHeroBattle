import { createContext, useState } from 'react';

interface IModalContext {
  isBattlePreviewModalOpen: boolean;
  setIsBattlePreviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as IModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isBattlePreviewModalOpen, setIsBattlePreviewModalOpen] =
    useState(false);

  return (
    <ModalContext.Provider
      value={{
        isBattlePreviewModalOpen,
        setIsBattlePreviewModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
