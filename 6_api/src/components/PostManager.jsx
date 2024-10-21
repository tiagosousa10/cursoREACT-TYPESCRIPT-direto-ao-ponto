import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

function PostManager() {
  //                                    useStates !
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //                                  handleSuccess
  const handleSuccess = (post, operation) => {
    if (operation === 'add') {
      setPosts((currentPosts) => [post, ...currentPosts]);
    } else if (operation === 'update') {
      setPosts((currentPosts) => currentPosts.map((p) => (p.id === post.id ? post : p)));
    } else if (operation === 'delete') {
      setPosts((currentPosts) => currentPosts.filter((p) => (p.id !== post.id)));
      setSelectedPost(null);
    }
    setIsEditing(false);
  };

  //                    renderizar os POSTS da API com axios
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        setPosts(response.data.slice(0, 5)); // os 5 primeiros posts
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  });
  //                                  handleEdit
  const handleEdit = (post) => {
    setSelectedPost(post);
    setIsEditing(true);
  };
  //                                 handleCancelEdit

  const handleCancelEdit = (post) => {
    setSelectedPost(null);
    setIsEditing(false);
  };
  //                                      return
  return (
    <div>
      <h1>Gerir Posts</h1>
      <PostForm post={isEditing ? selectedPost : null} onSuccess={handleSuccess} />
      {isEditing && <button onClick={handleCancelEdit}>Cancelar Ediçao</button>}
      <h2>Postagens</h2>
      {
        posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.title}
            </h2>
            <p>
              {post.body}
            </p>
            <button onClick={() => handleEdit(post)}>Editar</button>
          </div>
        ))
        }
    </div>
  );
}

export default PostManager;
