import {useMemo} from 'react';
// useMemo +para valores
const CalculoPesado = ({numero}) => {
  const resultadoCalculoPesado= useMemo(() => {
    return operacaoPesada(numero);
  },[numero]);


  return (
    <div>
      Resultado: {resultadoCalculoPesado}

    </div>
  );
};



const operacaoPesada = (num) => {
  console.log('Realizado operacao pesada');
  return num * 1000;
};



export default CalculoPesado;