import { useEffect, useState } from 'react';
import axios from 'axios';

function PostForm({ post, onSuccess }) {
  //                                  useStates ! title & body
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');

  //                                renderizar os posts recebidos pela props
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  //                                  resetar o setTitle e o Body
  const resetarCampos = () => {
    setTitle('');
    setBody('');
  };
  //                                          handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body, userId: 1 };

    try {
      if (post) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost); // atualizar (put)
        onSuccess(response.data, 'update');
        console.log(response.data);
      } else {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost); // enviar (post)
        onSuccess(response.data, 'add'); // adicionar post na lista do PostManager
        console.log(' Dados Inseridos: ', response.data);
      }
      resetarCampos();
    } catch (error) {
      console.log('erro ao enviar post: ', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`); // atualizar (put)
      onSuccess(post, 'delete');
    } catch (error) {
      console.log('erro ao DELETAR/eliminar post: ', error);
    }
  };

  //                                              return
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Digite o Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />

      </div>
      <div>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Digite qualquer coisa ..." />
      </div>
      <button type="submit">Enviar</button>
      {post && (
        <button type="button" onClick={handleDelete}>Excluir</button>
      )}
    </form>
  );
}

export default PostForm;
