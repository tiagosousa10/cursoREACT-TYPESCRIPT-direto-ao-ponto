import './App.css';

import {
  Routes, Route, Link, NavLink,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import TaskDetails from './components/TaskDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      {/* 1-setup de configuracao inicial */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contacto</Link></li>

          {/* 2- Navlink  */}
          <li>
            {/* Verificar se estou na pagina com isActive  */}
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/contact">Contato</NavLink>
          </li>
          {/*  3 -useNavigate */}
          <li>
            <Link to="/login"> Login</Link>
          </li>
          {/*  5 - rotas alinhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

        </ul>

        {/* 4-rotas dinamicas */}
        <div>
          <h2>Tarefas</h2>
          <Link to="/tasks/44">Tarefa 44</Link>
          <Link to="/tasks/23">Tarefa 23</Link>
          <Link to="/tasks/33">Tarefa 33</Link>
        </div>

        {/*  6- rota 404 */}
        <div>
          <h2>Itens</h2>
          <Link to="/items/1">Item 1</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*  3 -useNavigatel */}
        <Route path="/login" element={<Login />} />
        {/* 4-rotas dinamicas */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/*  5 - rotas alinhadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 6 - 404  */}
        {/* caso nao encontre rota redirecionar para o NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <p>Rodape</p>
    </>
  );
}

export default App;
