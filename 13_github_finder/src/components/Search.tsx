type SearchProps = {
  loadUser: (userName:string) => Promise<void>;
};

import {useState} from 'react'

import classes from './Search.module.css'

import { BsSearch } from 'react-icons/bs';

function Search({loadUser}:SearchProps) {

  const [userName,setUserName] = useState("")

  return (
    <div className={classes.search}>
      <h2>Pesquisar por um Utilizador :</h2>
      <p>Conheça seus melhores repositorios</p>
      <div  className={classes.search_container}>
        <input
        type="text"
        placeholder="Digite o nome do utilizador"
        onChange={(e)=> setUserName(e.target.value)} />
        <button onClick={()=>loadUser(userName)}>
          <BsSearch />
        </button>
      </div>

    </div>
  );
}

export default Search;
