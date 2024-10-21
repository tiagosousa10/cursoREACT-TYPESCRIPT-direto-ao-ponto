import {useState} from 'react';

const Counter = () => {
//  [consultar , alterar]
  const [count,setCount] = useState(0);
  //variaveis nao renderizam o componente
  /*   let x = 10;
  console.log(x); */

  return (
    <div>

      <p>Voce clicou {count} vezes.</p>
      <button onClick={()=> setCount(count+1)} >Aumentar</button>

    </div>
  );
};

export default Counter;