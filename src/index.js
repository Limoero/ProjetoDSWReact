import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Imports pra funcionar tudo */
import App from './App/App.js';
import Sobre from './Sobre/Sobre.js';
import NaoEncontrado from './NaoEncontrado/NaoEncontrado.js';
import Areaadm from './Areaadm/Areaadm';

/* Router faz com que crie rotas pra poder acessar as páginas*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/Areaadm' element={<Areaadm/>} />
        <Route path='/*' element={<NaoEncontrado />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
