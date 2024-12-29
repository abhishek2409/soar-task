import { createContext, useContext, useState, ReactNode, FC } from 'react';

// Define the types for your context values
interface SidebarContextType {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

// Create the context with a default value of undefined
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Define a provider component
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setOpen = (open: boolean) => setIsOpen(open);

  return (
    <SidebarContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for accessing the SidebarContext
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
