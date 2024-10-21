import './App.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import FetchPosts from './components/FetchPosts';
import AxiosPosts from './components/AxiosPosts';
import PostManager from './components/PostManager';
import PostLoader from './components/PostLoader';
import PostViewer from './components/PostViewer';

function App() {
  return (
    <BrowserRouter>
      {' '}

      {/* 1 -GET com Fetch e Axios  */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch com Posts</Link>
        <Link to="/axios-posts">Axios com Posts</Link>

      </div>

      {/* 2 - Continuando requisiçoes - POST e UPDATE/PUT  */}
      <div>
        <Link to="/posts">Gerir POSTS</Link>
      </div>

      {/* 3 - Tratamento de erros */}
      <div>
        <Link to="/posts/1">Carregar POST 1</Link>
      </div>
      <div>
        <Link to="/posts/999">Carregar POST 999</Link>
      </div>

      {/* 4 -custom hook com API  */}
      <div>
        <Link to="/posts/2">Carregar POST com HOOK  (useReducer)</Link>
      </div>

      <Routes>
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />

        {/* 2 - Continuando requisiçoes - POST e UPDATE/PUT  */}
        <Route path="/posts" element={<PostManager />} />

        {/* 3 - Tratamento de erros */}
        <Route path="/posts/:postId" element={<PostLoader />} />

        {/* 4 -custom hook com API  */}
        <Route path="/post/:postId" element={<PostViewer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
