import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

import './App.css';

import './LivroLista.js';
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

function App() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <nav className="navbar expand_navbar_n n_navbar_dark nav_bg_dark">
            <ul className="navbar_nav-nav">
              <li className="itens_nav active">
                <Link to="/" className="link_nav_n">Catálogo</Link>
              </li>
              <li className="nav-itens">
                <Link to="dados" className="link_nav_n">Novo</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<LivroLista />} />
            <Route path="dados" element={<LivroDados />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
  
  export default App;
  