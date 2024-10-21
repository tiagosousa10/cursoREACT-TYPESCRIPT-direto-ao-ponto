import React from 'react';
import FilhoFuncao from './FilhoFuncao';

const PaiFunction = () => {

  const handleChildClick= () => {
    console.log('clicou no botao flho');
  };

  
  return (
    <div>
      <FilhoFuncao onChildClick={handleChildClick}/>
    </div>
  );
};

export default PaiFunction;