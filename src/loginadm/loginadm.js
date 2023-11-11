import './login.scss';

import { Link } from 'react-router-dom';

export default function Loginadm() {
  return (
    <div className="login-container">
      <header className="cabecalho">
        <Link to="/">
          <img
            src="/images/flashlogo.png"
            alt="logo flashlimp"
            className="logoimg"
            height="120"
            width="120"
          />
        </Link>
      </header>

      <section className="faixa-1">
        <div className="f1conteudo">
          <form className="login-form">
            <h1>Login</h1>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" required />
            <Link to="/areaadm" className="login-btn">  Login  </Link>
            <Link to="/cadastraradm" className="login-btn">  Cadastrar  </Link>

          </form>
        </div>
      </section>
    </div>
  );
}
