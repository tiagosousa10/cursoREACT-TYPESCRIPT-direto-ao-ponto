import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>

      <h2>DASHBOARD</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile">Perfil</Link>
          </li>
          <li>
            <Link to="settings">Configuracoes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
