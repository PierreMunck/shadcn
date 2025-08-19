import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface Token {
  id: number;
  name: string;
  symbol: string;
  balance: number;
  price: number;
}

interface TokenContextType {
  tokens: Token[];
  addToken: (token: Omit<Token, 'id'>) => void;
  removeToken: (id: number) => void;
  updateToken: (id: number, updates: Partial<Token>) => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useTokenContext must be used within a TokenProvider');
  }
  return context;
};

interface TokenProviderProps {
  children: ReactNode;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [tokens, setTokens] = useState<Token[]>([]);

  const addToken = (tokenData: Omit<Token, 'id'>) => {
    const newToken: Token = {
      ...tokenData,
      id: Date.now(),
    };
    setTokens(prev => [...prev, newToken]);
  };

  const removeToken = (id: number) => {
    setTokens(prev => prev.filter(token => token.id !== id));
  };

  const updateToken = (id: number, updates: Partial<Token>) => {
    setTokens(prev => prev.map(token => 
      token.id === id ? { ...token, ...updates } : token
    ));
  };

  return (
    <TokenContext.Provider value={{ tokens, addToken, removeToken, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};
