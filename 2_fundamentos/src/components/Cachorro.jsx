
const Cachorro = ({nome,raca}) => {
  //props.nome => nome
  //destructuring => {}, []
  return (
    <div>
      <p>O cachorro se chama {nome} e é da raca {raca}  </p>
    </div>
  );
};

export default Cachorro;