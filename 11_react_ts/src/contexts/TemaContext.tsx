import {
  Children, createContext, ReactNode, useState,
} from 'react';

type Tema = 'claro' | 'escuro'

interface TemaContexto {
  tema:Tema;
  alternarTema: () => void;
}

export const TemaContext = createContext<TemaContexto| null>(null);

interface TemaProviderProps{
  children: ReactNode
}

export function TemaProvider({ children }:TemaProviderProps) {
  const [tema, setTema] = useState<Tema>('claro');

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
