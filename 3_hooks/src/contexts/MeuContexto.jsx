import {useState,createContext} from 'react';

export const MeuContexto = createContext();

export const MeutContextoProvider = ({children}) => {
  const [mensagem,setMensagem] = useState('Mensagem Inicial!');

  const valorDoContexto = {
    mensagem,
    setMensagem,
  };

  return (
    <MeuContexto.Provider  value={valorDoContexto} >
      {children}
    </MeuContexto.Provider>
  );
};