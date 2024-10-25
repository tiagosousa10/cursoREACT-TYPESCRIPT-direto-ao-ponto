import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Calculadora from './pages/Calculadora';
import Resultado from './pages/Resultado';    

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculadora />} />
        <Route path='/resultado'  element={<Resultado/>}   />
      </Routes>
    </BrowserRouter>        
  );
}

export default App;
