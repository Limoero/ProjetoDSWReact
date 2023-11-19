import { con } from "./conexaoapi.js";

export async function salvar(produto) {
    const comando = ` INSERT INTO tb_produto(
        nome_produto,
        desc_produto,
        quantidade_produto,
        imagem_produto
        ) 
         values(
         ?,?,?,?
         );`
    const [info] = await con.query(comando, [produto.nome, produto.descricao, produto.quantidade, produto.preco])
        produto.id = info.insertId;

        return produto;
}

export function listar() {

}

export function alterar(id, produto) {

}

export function remover(id) {

}