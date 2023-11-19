
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import produtoController from './controller/produtoController.js'

const servidor  = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(produtoController);


const port = process.env.PORT;
servidor.listen(port,()=> console.log(`A API subiu na porta ${port}`))