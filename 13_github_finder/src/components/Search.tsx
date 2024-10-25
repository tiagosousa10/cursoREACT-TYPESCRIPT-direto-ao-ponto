import { BsSearch } from 'react-icons/bs';

function Search() {
  return (
    <div>
      <h2>Pesquisar por um Utilizador :</h2>
      <p>Conheça seus melhores repositorios</p>
      <div>
        <input type="text" placeholder="Digite o nome do utilizador" />
        <button>
          <BsSearch />
        </button>
      </div>

    </div>
  );
}

export default Search;
