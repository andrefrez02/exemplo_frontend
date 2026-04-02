import { Link } from "react-router-dom";
import logo from "../Content/Imagens/logo.svg";
import logoHagana from "../Content/Imagens/logo-hagana.svg";

export default function HeaderFull() {
  return (
    <header className="header">
      <div className="header-div">
        <div className="header-div__logo">
          <Link to="/">
            <img src={logo} alt="Tevel News Logo" title="Tevel News Logo" />
          </Link>
        </div>
        <div className="header-div__options">
          <Link className="btn-border" to="/login">
            Entrar
          </Link>
          <Link className="btn" to="/cadastro">
            Cadastrar
          </Link>
          <Link to="/noticias">
            <img src={logoHagana} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
