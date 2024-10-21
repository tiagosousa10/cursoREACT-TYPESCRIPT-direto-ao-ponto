import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // redirecionando o utilizador de URL
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`O utilizado ${username} fez login com sucesso!`);
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} className="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
