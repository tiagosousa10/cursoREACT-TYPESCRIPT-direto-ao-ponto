import {useState,useEffect} from 'react';            

const Timer = () => {
  const [segundos,setSegundos]=useState(0);

  //setInterval, setTimeout
  useEffect(()  => {

    const intervalId = setInterval(()=>{
      setSegundos((prevSegundos)=> prevSegundos+1);
    },1000);   

    //limpeza de estado
    return () => clearInterval(intervalId);
  },[]);// array de dependencias vazio 


  //                      MAIN
  return (
    <div>Timer: {segundos} segundos</div>       
  );
};

export default Timer;