import React from 'react';

const NumberList = ({numbers}) => {
//estruturas de loop - for , while
//metodos array - filter, map, reduce ,...


  //chaves -key
  //um identificador unico para cada elemento
  return (
    <ul>
      {numbers.map((number,index)=> (
        <li key={index}>{number}</li>
      ))}

    </ul>
  );
};

export default NumberList;