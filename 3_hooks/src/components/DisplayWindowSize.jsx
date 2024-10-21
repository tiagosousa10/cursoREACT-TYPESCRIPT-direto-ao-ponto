//importamos o hook que criamos para calcular o windowSize
import useWindowSize from '../hooks/useWindowSize';

//                        MAIN
const DisplayWindowSize = () => {
//destruturar os valores que vem do hook(useWindowSize)
  const {width,height} = useWindowSize();
  return (
    //mostrar na pagina
    <div>
      <p>A lagura da janela é: {width} </p>
      <p>A altura da janela é: {height} </p>

    </div>
  );
};

export default DisplayWindowSize;