import { useState } from "react";
import logoTevel from "../Content/Imagens/logo.svg";
import HighlightText from "../Components/HighlightText";
import globo from "../Content/Imagens/globo.png";
import clima from "../Content/Imagens/clima.svg";
import logoHagana from "../Content/Imagens/logo-hagana-vertical2.svg";
import megafone from "../Content/Imagens/megafone.svg";
import bandeira from "../Content/Imagens/israel-brasil.png";
import predio from "../Content/Imagens/predio-hagana.png";
import maximaze from "../Content/Imagens/maximaze.svg";
import minimize from "../Content/Imagens/minimize.svg";

export default function Noticias() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const css = `html, #root {
    height: -webkit-fill-available;
  }`;

  const renderizarItens = () => {
    const elementos = [];
    const textos = [
      "Novidade - Site novo da Haganá",
      "Pequeno Impacto - Omissão de Socorro",
      "Pequeno impacto - Perturbação de Sossêgo",
    ];

    for (let i = 0; i < 30; i++) {
      let j = 0;
      j = i % 3;
      elementos.push(<h3 key={i}>{textos[j]}</h3>);
    }

    return elementos;
  };

  const renderizarItens2 = () => {
    const elementos = [];
    const nomes = [
      "Samela de Araujo Silva",
      "Vitória Dias",
      "Rodson Keiji Yoshitami Viana",
    ];
    const horas = ["2", "3", "4"];
    const cargos = ["Gerencia Sênior", "Gerencia Geral", "Gerencia Sênior"];
    const gerentes = ["Márcia Dutra", "Jaime Donato", "Flávio Barril Nunes"];
    const ocorrencias = [
      "Novidade - Site novo da Haganá",
      "Alto Impacto - Omissão de Socorro",
      "Pequeno impacto - Perturbação de Sossêgo",
    ];
    const impactos = ["neutro", "alto", "pequeno"];

    for (let i = 0; i < 30; i++) {
      let j = 0;
      j = i % 3;
      elementos.push(
        <div className="ocorrencia" key={i}>
          <div className="ocorrencia__thumb">
            <img src={predio} alt="" />
          </div>
          <div className="ocorrencia__dados">
            <div className={`impacto ${impactos[j]}`}></div>
            <div className="categoria">
              <p>{nomes[j]}</p>
              <small>⚪</small>
              <span>há {horas[j]} horas</span>
            </div>
            <div className="descricao">
              <p>{ocorrencias[j]}</p>
            </div>
            <div className="gerencia">
              <p>{cargos[j]}</p>
              <p>{gerentes[j]}</p>
            </div>
          </div>
        </div>
      );
    }

    return elementos;
  };

  return (
    <>
      <style>{css}</style>
      <div className="noticias__bg"></div>
      <div className="noticias__grid">
        <main className="noticias">
          <aside className="globo">
            <img src={globo} alt="" />
          </aside>
          <section className="centro">
            <header className="logo">
              <a href="/">
                <img src={logoTevel} alt="" />
              </a>
            </header>
            <div
              className={`destaque ${isFullscreen ? "fullscreen" : ""}`}
              style={{
                animation: isFullscreen
                  ? "expand .2s ease-out forwards"
                  : "shrink .2s ease-in forwards",
              }}
            >
              <img
                src={maximaze}
                alt=""
                onClick={toggleFullscreen}
                style={{ display: isFullscreen ? "none" : "block" }}
              />
              <img
                src={minimize}
                style={{ display: isFullscreen ? "block" : "none" }}
                alt=""
                onClick={toggleFullscreen}
              />
            </div>
          </section>
        </main>
        <aside
          className="noticias__lista"
          style={{
            transform: !isFullscreen ? "translate(0, 0)" : "translate(200%, 0)",
          }}
        >
          <div className="logo">
            <img src={bandeira} alt="" />
            <img src={logoHagana} alt="" />
          </div>
          <div className="ocorrencias">
            <div className="ocorrencias__header">
              <h1>OCORRÊNCIAS RECENTES</h1>
            </div>
            <div className="ocorrencias__list">{renderizarItens2()}</div>
            <a
              href="/cadastro"
              className="ocorrencias__list-add"
              style={{ display: isFullscreen ? "none" : "block" }}
            >
              Cadastrar
            </a>
          </div>
        </aside>
        <footer
          className="noticias__footer"
          style={{
            marginRight: isFullscreen ? "-35%" : "",
            marginLeft: isFullscreen ? "15%" : "",
          }}
        >
          <div className="temp">
            <div className="temp__icon">
              <img src={clima} alt="" />
            </div>
            <HighlightText Text="18°" Classname="temp__text" />
            <div className="temp__subtext">
              <HighlightText
                Text="São Paulo"
                Classname="temp__subtext-cidade"
              />
              <HighlightText Text="18:13" Classname="temp__subtext-hora" />
            </div>
          </div>
          <div className="logo">
            <img src={logoHagana} alt="" />
          </div>
          <div className="headline">
            <div className="categoria">
              <div className="categoria__bg">
                <h1>BREAKING NEWS</h1>
              </div>
              <div className="categoria__bg">
                <h2>Ao vivo</h2>
              </div>
            </div>
            <div className="destaque">
              <h1 className="destaque__title">ACONTECIMENTO - NOTÍCIA TEXTO</h1>
              <h2 className="destaque__subtitle">
                Subtítulo da notícia - informações cruciais sem muito destaque
              </h2>
            </div>
          </div>
        </footer>
        <div className="noticias__scroller">
          <div className="noticias__scroller-icon">
            <img src={megafone} alt="Ícone de novidades" />
          </div>

          <div className="noticias__scroller-items">
            <div className="noticias__track">{renderizarItens()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
