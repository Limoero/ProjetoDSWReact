import './App.scss';
/*import logo  from '/src/images/flashlogo.png';*/
import logo from './flashlogo.png';
import image1 from './esfregao.png';
import image2 from './produtolimpeza.png';
import image3 from './lustramoveis.png';


import { Link } from 'react-router-dom';

export default function App() {


  return (
    <body>

      <header class="cabecalho">

        <Link to='/'><img src={logo} alt="logo flashlimp" height="120" width="120" /></Link>
        <div class="pesquisar">
          <input type="text" name="pesquisar" id="pesquisa" placeholder="O que deseja pesquisar?" size="60" />
        </div>

       <Link to='/loginadm'><input type="button" value="Login" /></Link> 
      </header>
      <section class="f1-faixa">
        <div class="f1conteudo">
          <h1>PROMOÇÃO:</h1>
          <h2>LUSTRAMÓVEIS POLIFLOR</h2>
          <h3 id="riscar">DE: R$ 32,99</h3>
          <h3>DE: R$ 19,99</h3>
        </div>
        <div class="f1-imagem">
          <img src={image3} alt="lustramoveis" height="500" width="500" />
        </div>
      </section>
      <section class="f2-faixa" >
        <div class="f2conteudo">
          <div class="f2-imagens">
            <img src={image1} alt="esfregao" height="50" width="50" />

            <img src={image2} alt="esponja" height="50" width="50" />

            <img src="/images/esponja.png" alt="esponja" height="100" width="100" />

            <img src="/images/sabaoempo.png" alt="sabaoempo" height="100" width="100" />

            <img src="/images/luvalatex.png" alt="luvalatex" height="100" width="100" />
          </div>

        </div>
      </section>
    </body>
    
          );

}