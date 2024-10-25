import { useLocation,useNavigate } from 'react-router-dom';

import { Alimento,nomesAlimentos,quantidadePessoas } from '../types';

import styles from './ResultadoChurrasco.module.css';

type ResultadosChurrasco = {
  pessoas:number,
  alimentosSelecionados:Alimento[]
}


const ResultadoChurrasco = () => {

  const location= useLocation();
  const navigate= useNavigate();
  // receber os estados anteriores de outras paginas com "location"
  const state = location.state as ResultadosChurrasco;
  //acc => acumulador
  const totalPorAlimento= state.alimentosSelecionados.reduce((acc,alimento)=> {
    acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000;
    return acc;
  },{} as Record<Alimento,number> // vai receber um alimento e um numero como valor inicial
  );

  const reiniciar = () => {
    navigate('/');
  };
  return (
    <div className={styles.container} >
      <h2 className={styles.title}>Resultado para {state.pessoas} pessoas:</h2>
      {state.alimentosSelecionados.map((alimento)=> (
        <p key={alimento} className={styles.resultText} >{nomesAlimentos[alimento]}: {totalPorAlimento[alimento]} kg </p>
      ))}
      <button onClick={reiniciar} className={styles.resetButton}>Reiniciar</button>
    </div>
  );
};

export default ResultadoChurrasco;