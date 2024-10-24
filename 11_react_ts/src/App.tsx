import './App.css';
import ContadorIntervalo from './components/ContadorIntervalo';
import Counter from './components/Counter';
import Exercicios from './components/Exercicios';
import Greeting from './components/Greeting';
import TextInput from './components/TextInput';

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
    </>
  );
}

export default App;
