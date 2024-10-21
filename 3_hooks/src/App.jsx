
import './App.css';
import ExemploUseEffect from './components/ExemploUseEffect';
import Timer from './components/Timer';        
import ComponenteFilho from './components/ComponenteFilho';
import { MeutContextoProvider } from './contexts/MeuContexto';
import ValorDoContexto from './components/ValorDoContexto';
import Contador from './components/Contador';
import DisplayWindowSize from './components/DisplayWindowSize';
import Container from './components/Container';
import PerfilDeUsuario from './components/PerfilDeUsuario';
import CalculoPesado from './components/CalculoPesado';
import ContadorCallback from './components/ContadorCallback';
import Exercises from './components/Exercises';

function App() {

  return (
    <>
      {/*  8.1 -useEffect   */}
      <ExemploUseEffect/>
      <Timer/> 

      {/* 8.2 useContext  */}
      {/* aplicacoes de pequeno/medio porte, que precisam de transferir o estado entre componentes */}
      <MeutContextoProvider>
        <ComponenteFilho/>
        <ValorDoContexto/>
      </MeutContextoProvider>

      {/* 8.3 - useReducer  */}
      {/*  estados mais complexos */}
      <Contador/>

      {/*  8.4 - Custom hook  */}
      <DisplayWindowSize/>

      {/* 8.5 - Slots e children props  */}
      <Container>
        <h1>Titulo da secao</h1>
        <p>Este é o titulo</p>
        <Contador/>
      </Container>

      {/*  8.6 - Sincronizar o estado com props */}
      {/*  prop => componente => chamada de API => resulta em um dado */}
      <PerfilDeUsuario  usuarioId={1}  />
      <PerfilDeUsuario  usuarioId={2}  />

      {/* 8.7- useMemo e useCallback */}
      <CalculoPesado  numero={5}  />
      <ContadorCallback/>
      {/* 8.8-  Exercises*/}
      <Exercises/>


    </>         
  );
}

export default App;
