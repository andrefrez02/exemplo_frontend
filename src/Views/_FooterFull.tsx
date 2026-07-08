import frezdevLogo from "../Content/Imagens/frezdev-logo-light.svg";

export default function FooterFull() {
  return (
    <footer className="footer">
      <a
        className="footer__brand"
        href="https://frezdev.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={frezdevLogo} alt="FrezDev" title="FrezDev" />
      </a>
    </footer>
  );
}
