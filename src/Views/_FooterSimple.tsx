import { Link } from "react-router-dom";
import logoHorizontal from "../Content/Imagens/logo-hagana-horizontal.svg";
import facebook from "../Content/Imagens/facebook.svg";
import instagram from "../Content/Imagens/instagram.svg";
import linkedin from "../Content/Imagens/linkedin.svg";
import twitter from "../Content/Imagens/twitter.svg";

export default function FooterSimple() {
  return (
    <footer className="footer simple">
      <div className="footer-div">
        <div className="footer-div__logo">
          <Link to="/">
            <img
              src={logoHorizontal}
              alt="Tevel News Logo"
              title="Tevel News Logo"
            />
          </Link>
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
