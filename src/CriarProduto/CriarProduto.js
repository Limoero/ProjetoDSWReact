import React, { useState } from 'react';
import './CriarProduto.scss';

export default function CriarProduto() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descProduto, setDescProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [fotoProduto, setFotoProduto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFotoProduto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome_produto', nomeProduto);
    formData.append('desc_produto', descProduto);
    formData.append('preco_produto', precoProduto);
    formData.append('foto_produto', fotoProduto);

    try {
      const response = await fetch('/api/api', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Product added successfully');
        // You may redirect or do something else after successful product creation
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <body>
      <section class="faixa-1">
        <div class="f1conteudo">
          <form onSubmit={handleSubmit}>
            <h1>Criar produto</h1>
            <label for="nomeProduto">Nome do produto</label>
            <input
              type="text"
              id="nomeProduto"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
            />
            <label for="descProduto">Descrição do Produto</label>
            <input
              type="text"
              id="descProduto"
              value={descProduto}
              onChange={(e) => setDescProduto(e.target.value)}
            />
            <label for="precoProduto">Preço do produto</label>
            <input
              type="number"
              id="precoProduto"
              name="doubleInput"
              step="any"
              value={precoProduto}
              onChange={(e) => setPrecoProduto(e.target.value)}
              required
            />
            <label for="imageUpload">Foto do produto</label>
            <input
              type="file"
              id="imageUpload"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            <input type="submit" value="Inserir produto" />
          </form>
        </div>
      </section>
    </body>
  );
}
