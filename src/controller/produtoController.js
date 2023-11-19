import { salvar } from "../api/crudproduto";
import { Router } from "express";

 const endpoints = Router();

 endpoints.post('/produto', async (req, resp) => {
    try{
        let produto = req.body;
      let r =  await salvar(produto);

      resp.send(r);

    }
    catch(err){
        resp.status(400).send({
         erro: err.message   
        })
    }
 });