
const Descricao = (props) => {

  //props = {}
  //propriedades -> chaves dos valores
  //props.nome = 'Mateus'
  return (
    <div>
      <p>Seu nome é {props.nome}</p>
      <p>Sua idade é {props.idade}</p>
    </div>
  );
};

export default Descricao; 