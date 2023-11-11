import './CriarProduto.scss';
import { Router } from 'react-router-dom';

export default function CriarProduto() {

    return (
        <body>
            <section class="faixa-1">
                <div class="f1conteudo">
                    <form action="#" method="post">
                        <h1>Criar produto</h1>
                        <label for="name">Nome do produto</label>
                        <input type="text" />
                        <label for="name">Descrição do Produto</label>
                        <input type="text" />
                        <label for="name">Preço do produto</label>
                        <input type="number" id="doubleInput" name="doubleInput" step="any" required />
                        <label for="imageUpload">Foto do produto</label>
                        <input type="file" id="imageUpload" name="image" accept="image/*" />
                        <input type="submit" value="Inserir produto" />
                    </form>
                </div>

            </section>

        </body>
    );



}