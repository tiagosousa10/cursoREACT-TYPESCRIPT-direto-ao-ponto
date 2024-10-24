import './App.css';
import BarraFerramentas from './components/BarraFerramentas';
import Contador from './components/Contador';
import ContadorIntervalo from './components/ContadorIntervalo';
import Counter from './components/Counter';
import Exercicios from './components/Exercicios';
import ExibirPostagens from './components/ExibirPostagens';
import Greeting from './components/Greeting';
import TextInput from './components/TextInput';
import { TemaProvider } from './contexts/TemaContext';

function App() {
  return (
    <>
      <h1>React com TS</h1>
      {/*  1 - Componentes funcional com TS */}
      <Greeting name="Tiago" />
      {/* 2 -Hooks com tipos  */}
      <Counter />
      {/* Manipulacao com Tipos  */}
      <TextInput />
      {/*  4 - Custom hooks com TS */}
      <ContadorIntervalo />
      {/* 5 - Exercicios  */}
      <Exercicios />
      {/* 6 - useReducer com TS */}
      <Contador />
      { /* 7 - Context API com TS */ }
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      {/* 8 - Requisicao de APIS com Axios e TS */}
      <ExibirPostagens />
    </>
  );
}

export default App;
