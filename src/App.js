import React, { useEffect, useState } from 'react';
import './App.css';
import api from './api';
import Card from './Card/card';

function App() {

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function loadGroups() {
      const { data } = await api.get();
      document.querySelector('span.loading').remove();
      setGroups(data.grupos);
    }
    loadGroups();
  }, []);

  return (
    <main>
      <header className="header">
        <h1>Grupos Whatsapp IFCE Maracanaú</h1>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnPOnwHotoejvwan5V6dSumodFRZ3O9tt3gKEd0qPcwyQjtg/viewform" target="_blank">+ Adicionar Grupo</a>
      </header>
      <div className="container">
        <span className="loading">Carregando...</span>
        <div className="card-list">
          {groups.map(g =>
            <Card key={g.key} imagem={g.imgUrl} nome={g.nome} a={g.gUrl} />
          )}
        </div>
      </div>
      <footer className="footer">
        <span>Desenvolvido por Emanuel Douglas</span>
        <a href="https://github.com/emanueldsc">
          <img src={require("./assets/github.png")} alt="github" />
          <span>Github</span>
        </a>
      </footer>
    </main>
  );
}

export default App;
