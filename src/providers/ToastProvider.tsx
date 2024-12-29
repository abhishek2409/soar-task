import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for your context values
type ToastType = 'success' | 'error';

interface ToastData {
  text: string;
  type: ToastType;
  open: boolean;
}

interface ToastContextType {
  setToast: (data: Partial<ToastData>) => void;
  toastData: Partial<ToastData> | undefined;
}

// Create the context with a default value of undefined
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Define a provider component
interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastData, setToast] = useState<Partial<ToastData>>();

  return (
    <ToastContext.Provider value={{ toastData, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook for accessing the ToastContext
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
