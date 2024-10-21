import {useState,useEffect} from 'react';

const PerfilDeUsuario = ({usuarioId}) => {

  const [usuario,setUsuario] = useState(null);


  useEffect(()=>{
    //Funcao para procurar dados
    const buscarUsuarios = async () => {
      //resposta assincrona
      const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`);
      const dadosUsuario = await resposta.json();
      //apos ter a resposta , mudar o estado de usuario para os dados que carregou
      setUsuario(dadosUsuario);
    };

    //se existir um usuario enviado como props
    if(usuarioId){
      //executar a funcao buscarUsuarios
      buscarUsuarios();
    }else{
      console.log('Nao enviou usuarioID como props');
    }

  },[usuarioId]);


  return (
    <div>{usuario 
      ? (
        <div>
          <h1>
            {usuario.name}
          </h1>
          <p>{usuario.email} </p>
        </div>
      )
      :
      <p>Carregando Perfil do Usuario</p>
    }

    </div>
  );
};

export default PerfilDeUsuario;