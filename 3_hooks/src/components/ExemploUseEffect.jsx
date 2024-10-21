import {useEffect,useState} from 'react';

const ExemploUseEffect = () => {
  const [contador,setContador] = useState(0);

  //executar algo baseado em algo
  //mudança de um valor, carregamento de uma pagina
  useEffect(()=>{
    document.title=`Voce clico ${contador} vezes`;
  });


  return (
    <div>
      <p> `Voce clico {contador} vezes`</p>
      <button onClick={()=>setContador(contador +1)} >Clique Aqui</button>

    </div>
  );
};

export default ExemploUseEffect;