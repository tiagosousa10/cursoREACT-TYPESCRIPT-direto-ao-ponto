import {useReducer} from 'react';

//                          Definicao do estado inicial

const estadoInicial = {contador:0};

//                    Funcao reducer que define como as acoes atualizam o estado()modificadora
function reducer(estado,acao){
  switch(acao.tipo){
  case 'incrementar':
    return {contador:estado.contador +1};

  case 'decrementar':
    return {contador:estado.contador -1};

  case 'resetar':
    return {contador : 0};
  case 'incrementar_dobrar':
    return {contador : estado.contador*2};
  default:
    throw new Error('Acao nao suportada');
  }
}



//                                    MAINNNNNNNNNNN
const Contador = () => {

  //                        Iniciar o useReducer com o estado inicial e funcao modificadora

  const [estado,dispatch]= useReducer(reducer,estadoInicial);
  return (
    <div>
      <p>Contagem:{estado.contador}</p>
      <button  onClick={()=>dispatch({tipo:'incrementar'})} >Incrementar </button>
      <button  onClick={()=>dispatch({tipo:'incrementar_dobrar'})} >Incrementar a dobrar </button>

      <button  onClick={()=>dispatch({tipo:'decrementar'})} >Decrementar </button>
      <button  onClick={()=>dispatch({tipo:'resetar'})} >Resetar </button>

    </div>
  );
};

export default Contador;