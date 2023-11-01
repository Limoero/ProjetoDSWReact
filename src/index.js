import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App/App.js';
import Contato from './Contato/Contato.js';
import Sobre from './Sobre/Sobre.js';
import NaoEncontrado from './NaoEncontrado/NaoEncontrado.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Sobre' element={<Sobre />} />
        
        <Route path='/*' element={<NaoEncontrado />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
