import './Areaadm.scss';

import { Link } from 'react-router-dom';

export default function App() {

    return(
        <body>

        <header className="cabecalho">
    
           <Link to='/' ><img alt="logo flashlimp" className="logoimg" height="120" width="120"/></Link>
            <div className="texto1">
                <h1>O que deseja fazer?</h1>
            </div>
            <div className="texto2">
                <h3>Bem vindo, Administrador</h3>
            </div>
        </header>
        <section className="f1-faixa">
            <div className="f1conteudo">
                <div className="botoes">
                    <a href="/html/criarproduto.html" className="my-button">Criar Produto</a>
                    <a href="/html/conaltproduto.html" className="my-button">Consultar/Alterar Produto</a>
                </div>
            </div>
    
        </section>
    
    </body>  





    );
}