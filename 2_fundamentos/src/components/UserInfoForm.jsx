import {useState} from 'react';

const UserInfoForm = () => {
  const [name,setName] = useState('');
  const [email,setEmail]= useState('');

  const handleSubmit=(event) =>{
    event.preventDefault();
    // acessar a API via fetch ou axios

    console.log(name,email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Digite o seu nome"/>
      {name}

      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail" />
      {email}
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default UserInfoForm;