import React, { useEffect, useState } from 'react';
import './App.css';
import api from './api';
import Card from './Card/card';

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
        <a>+ Adicionar Grupo</a>
      </header>
      <ul className="container">
        {groups.forEach((g, index) => (
          <Card imagem={g.imgUrl} nome={g.nome} a={g.gUrl} index={index} />
        ))}
      </ul>
    </>
  );
}

export default App;
