import logo from "../Content/Imagens/logo.svg";
import logoHagana from "../Content/Imagens/logo-hagana.svg";

export default function HeaderSimple() {
  return (
    <header className="header simple">
      <div className="header-div">
        <div className="header-div__logo">
          <a href="/">
            <img src={logo} alt="Tevel News Logo" title="Tevel News Logo" />
          </a>
        </div>
        <div className="header-div__options">
          <a href="/">
            <img src={logoHagana} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
