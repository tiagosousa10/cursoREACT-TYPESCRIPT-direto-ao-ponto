//rafce = automatico
import React from 'react';

const BotaoEstilizado = () => {

  //class => className
  //for = htmlFor

  const estiloDoBotao={
    //background-color -> backgroundColor
    backgroundColor:'#333',
    color:'#FFF',
    padding:'15px 32px',
    cursor:'pointer',
  };


  return(
    <button style={estiloDoBotao} >Clique Aqui</button>
  );
};

export default BotaoEstilizado;