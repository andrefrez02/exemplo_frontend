import logoVertical from "../Content/Imagens/logo-hagana-vertical.svg";
import linkIcon from "../Content/Imagens/link-icon.svg";
import emailIcon from "../Content/Imagens/email-icon.svg";
import localIcon from "../Content/Imagens/local-icon.svg";
import telIcon from "../Content/Imagens/tel-icon.svg";
import facebook from "../Content/Imagens/facebook.svg";
import instagram from "../Content/Imagens/instagram.svg";
import linkedin from "../Content/Imagens/linkedin.svg";
import twitter from "../Content/Imagens/twitter.svg";

export default function FooterFull() {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="footer-div__logo">
          <a href="/">
            <img
              src={logoVertical}
              alt="Tevel News Logo"
              title="Tevel News Logo"
            />
            <small>Desenvolvimento</small>
            <span>Equipe BI & TI</span>
          </a>
        </div>
        <div className="footer-div__info">
          <a className="link" href="https://erp-app-prod.grupohagana.com.br">
            <img src={linkIcon} alt="Ícone de site" />
            <span>erp-app-prod.grupohagana.com.br</span>
          </a>
          <a className="link" href="/">
            <img src={emailIcon} alt="Ícone de e-mail" />
            <span>tevel@hagana.com.br</span>
          </a>
          <a className="link" href="/">
            <img src={localIcon} alt="Ícone de localização" />
            <span>Rua Cruzeiro, 549 - Barra Funda</span>
          </a>
          <a className="link" href="/">
            <img src={telIcon} alt="Ícone de telefone" />
            <span>(11) 3393-1717</span>
          </a>
        </div>
        <div className="footer-div__links">
          <a className="link" href="/">
            Grupo Haganá
          </a>
          <a className="link" href="/">
            Haganá Tevel
          </a>
          <a className="link" href="/">
            Checkpoint
          </a>
        </div>
        <div className="footer-div__social">
          <a className="link" href="/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a className="link" href="/">
            <img src={facebook} alt="Facebook" />
          </a>
          <a className="link" href="/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a className="link" href="/">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
