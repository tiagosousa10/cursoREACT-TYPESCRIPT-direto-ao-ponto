import './App.css';


import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';
import Button from './components/Button';
import PaiFunction from './components/PaiFunction';
import Form from './components/Form';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import BotaoEstilizado from './components/BotaoEstilizado';
import BotaoAzul from './components/BotaoAzul';
import Exercises from './components/Exercises';
     
function App() {
 
  return (       
    <>   
      {/* 6.1 - Criaçao de componente*/}
      <Welcome/>     
      {/* 6.2 -  Expressoes do JSX*/}
      <BomDia/>   
      {/* 6.3 -  Componente dentro de Componente*/}
      <Pai/>
      {/* 6.4 -  Props*/}
      <Descricao nome="Bob" idade={30}/>
      {/* 6.5 Desestruturacao de props*/}
      <Cachorro nome="Shark" raca="Pastor Alemao"  />
      {/* 6.6 useState -> hook*/}
      <Counter/>
      {/*6.7 - Multiplos estados */}
      <UserInfoForm/>
      {/* 6.8 Eventos*/}
      <Button />
      {/* Passar funçoes de manipulaçao de eventos como props*/}
      <PaiFunction/>
      {/* 6.10  Eventos Form*/}
      <Form/>
      {/* 6.11 Renderizacao Condicional */}
      <RenderCondicional user="Mateus"/>
      {/* 6.12 - expressao ternária*/}
      <LoginButton loggedIn={true} />
      <LoginButton loggedIn={false} />
      {/* 6.13 render null*/}
      <Warning warning="Temos um warning" />
      {/* 6.14 - Listas chaves*/}
      <NumberList  numbers={[1,2,3,4,5]} />
      {/* estilos por atributo*/}
      <BotaoEstilizado/>
      {/* estilos globais */}
      <BotaoAzul/>
      {/*6.17 - Exercicios */}
      <Exercises/>
    </>
  );
}

export default App;
