import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Imports pra funcionar tudo */
import App from './App/App.js';
import NaoEncontrado from './NaoEncontrado/NaoEncontrado.js';
import Areaadm from './Areaadm/Areaadm.js';
import Loginadm from './loginadm/Loginadm.js';
import CriarProduto from './CriarProduto/CriarProduto.js';

/* Router faz com que crie rotas pra poder acessar as páginas*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/Areaadm' element={<Areaadm/>} />
        <Route path='/*' element={<NaoEncontrado />} />
        <Route path='/Loginadm' element={<Loginadm />} />
        <Route path='/criarproduto' element={<CriarProduto/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
