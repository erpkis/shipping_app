"use client"


import { createContext, useContext, useState, ReactNode, Dispatch, useEffect, SetStateAction } from 'react';
import { getSession } from '../lib/lib';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>;
  isAuthCheckingCompleted: boolean; //zmienna pomocnicza do ładowania komponentów
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: function (value: SetStateAction<boolean>): void{},
  isAuthCheckingCompleted: false
});

interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthCheckingCompleted, setIsAuthCheckingCompleted] = useState<boolean>(false);
  
  useEffect(() => {
    const loadSession = async () => {
      const sessionData = await getSession();
      setIsAuthenticated(sessionData ? true : false);
    };
    loadSession()
    setIsAuthCheckingCompleted(true);
  }, [])
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isAuthCheckingCompleted }}>
      {children}
    </AuthContext.Provider>
  );
};
