import React, { useEffect, useState } from 'react';
import './App.css';
import api from './api';

function App() {

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function loadGroups() {
      const { data } = await api.get();
      setGroups(data.grupos);
    }
    loadGroups();
  }, []);

  return (
    <>
      <header className="header">
        <h1>Grupos Whatsapp IFCE Maracanaú</h1>
      </header>
      <ul className="container">
        {groups.map(g => (
          <a href={g.gUrl}>
            <li key={g.nome}>
              <img src={g.imgUrl} />
              <span>{g.nome}</span>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
}

export default App;
