
const RenderCondicional = ({user}) => {
  // se houver um user mostrar 
  return (
    <div>
      {user && <h1>Bem vido de volta, {user}  </h1>}

    </div>
  );
};

export default RenderCondicional;