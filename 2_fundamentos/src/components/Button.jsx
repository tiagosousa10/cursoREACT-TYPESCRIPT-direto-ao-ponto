import React from 'react';

const Button = () => {

  const handleClick = (num) => {
    console.log('clicou',num);
  };


  return (
    <button  onClick={ handleClick} >Clique aqui!</button>
  );
};

export default Button;