import { useState } from 'react';
import { UserProps } from '../types/user';
import Search from '../components/Search';
import User from '../components/User';
import Error from '../components/Error';
import Loader from '../components/Loader';

function Home() {
  const [user, setUser] = useState < UserProps | null > (null);
  const [error,setError] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  //      funcao para encontrar utilizadores
  const loadUser  = async(userName:string) => {
    setIsLoading(true) // quando começa a requisiçao = true
    //Limpar a pagina | Iniciar/Resetar com estes estados apos pesquisas
    setError(false)
    setUser(null)
    //Fazer o fetch dos dados da api
    const result = await fetch(`https://api.github.com/users/${userName}`)
    //transformar em json
    const data = await result.json()
    setIsLoading(false) // quando acaba a requisiçao = false
    // Retornar algo se der o erro 404
    if(result.status === 404) {
    setError(true)
    return;
}

    const {avatar_url,login,location,followers,following} =data;

    const userData  : UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following

    }

    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
     {isLoading &&  <Loader/>}
      {user && <User {...user} />}
      {error && <Error/>  }
    </div>
  );
}

export default Home;
