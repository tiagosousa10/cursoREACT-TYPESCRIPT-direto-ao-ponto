import {useState,useEffect} from 'react';

//capturar altura e largura da pagina ao redimensionar a pagina
export default function useWindowSize(){
  //      estado  |   mudarEstado
  const[windowSize,setWindowSize] = useState({
    //valores iniciais
    width: window.innerWidth,
    height:window.innerHeight,
  });

  useEffect(()=>{
    //Funcao que altera os valores
    function handleResize(){
      //pega na variavel para mudarEstado e atualiza os parametros
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight,
      });
    }

    //Evento que dispara a funcao
    window.addEventListener('resize',handleResize);

    //executa a funcao
    handleResize();

    //Limpeza de memoria
    return () => window.removeEventListener('resize',handleResize);
  },[]);
  //retorna o valor que queremos saber(estado)
  return windowSize;
}