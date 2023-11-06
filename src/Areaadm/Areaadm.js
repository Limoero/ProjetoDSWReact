import Areaadm from './Areaadm.scss';

import { Link } from 'react-router-dom';

export default function App() {

    return(
        <body>

        <header class="cabecalho">
    
            <img src="/src/images/FlashLimp-removebg-preview.png" alt="logo flashlimp" class="logoimg" height="120" width="120"/>
            <div class="texto1">
                <h1>O que deseja fazer?</h1>
            </div>
            <div class="texto2">
                <h3>Bem vindo, Administrador</h3>
            </div>
        </header>
        <section class="f1-faixa">
            <div class="f1conteudo">
                <div class="botoes">
                    <a href="/html/criarproduto.html" class="my-button">Criar Produto</a>
                    <a href="/html/conaltproduto.html" class="my-button">Consultar/Alterar Produto</a>
                </div>
            </div>
    
        </section>
    
    </body>  





    );
}