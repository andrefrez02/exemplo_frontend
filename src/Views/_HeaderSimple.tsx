import { Link } from "react-router-dom";
import logo from "../Content/Imagens/vera-news.svg";
import logoVera from "../Content/Imagens/vera-logo-vertical.svg";

export default function HeaderSimple() {
  return (
    <header className="header simple">
      <div className="header-div">
        <div className="header-div__logo">
          <Link to="/">
            <img src={logo} alt="Vera News Logo" title="Vera News Logo" />
          </Link>
        </div>
        <div className="header-div__options">
          <Link to="/noticias">
            <img src={logoVera} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
