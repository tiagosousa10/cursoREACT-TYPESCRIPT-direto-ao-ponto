import { useState } from 'react';
import { UserProps } from '../types/user';
import Search from '../components/Search';

function Home() {
  const [user, setUser] = useState < UserProps | null > (null);

  //      funcao para encontrar utilizadores
  const loadUser  = async(userName:string) => {
    const result = await fetch(`https://api.github.com/users/${userName}`)

    const data = await result.json()

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
      {user && <p> {user.login} </p>}
    </div>
  );
}

export default Home;
