import {useState} from 'react';

const Form = () => {

  const [value,setValue]=useState('');
  const handleSubmit = (event) => {
    //manipulacao de dados
    //validacao
    //envio ao servidor pela API
    //loading
    //chamada da funcao de mensagens de erro/bem sucedido
    event.preventDefault();
    console.log('Formulario enviado',value); 'Formulario enviado: ' | 'teste';
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencha o campo" 
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;