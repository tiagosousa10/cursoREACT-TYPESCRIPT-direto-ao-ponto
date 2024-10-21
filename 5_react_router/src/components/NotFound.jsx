import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>402</h2>
      <p>Página nao encontrada</p>
      <Link to="/">Voltar para HOME</Link>
    </div>
  );
}

export default NotFound;
