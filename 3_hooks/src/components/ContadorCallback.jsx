//+para funcoes useCallback
import React,{useState,useCallback} from 'react';

// React.memo != useMemo
//memo = componentes
// useMemo =valores

//criar um botao que so dispara quando tem onClick e necessita da props
const Botao = React.memo(({onClick,children}) => { 
  return <button  onClick={onClick} >{children} </button>;
});


const ContadorCallback = () => {
  const [contador,setContador]=useState(0);

  const incrementar = useCallback(()=>{ // funcao estatica
    setContador((contadorAnterior)=> contadorAnterior +1);
  },[]);

  const decrementar = useCallback(()  =>  {
    setContador((contadorAnterior) => contadorAnterior -1);
  });

  return (
    <div>

      <p>Contagem:{contador}</p>
      <Botao onClick={incrementar} >Incrementar</Botao>
      <Botao onClick={decrementar} >Decrementar</Botao>

    </div>
  );
};

export default ContadorCallback;