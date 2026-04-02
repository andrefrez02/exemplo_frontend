import { useState } from "react";
import predioHagana from "../Content/Imagens/predio-hagana.png";
import visao from "../Content/Imagens/megafone.svg";
import missao from "../Content/Imagens/israel-brasil.png";
import HighlightText from "../Components/HighlightText";

const noticeParagraphs = [
  "Este site foi integralmente desenvolvido por mim durante meu per\u00edodo de atua\u00e7\u00e3o na Hagan\u00e1, empresa na qual trabalhei anteriormente. Apesar de a codifica\u00e7\u00e3o ter sido feita por mim, os direitos de uso e as licen\u00e7as do site pertencem exclusivamente \u00e0 referida empresa. O site est\u00e1 sendo exibido apenas para fins de portf\u00f3lio e estudo, com o objetivo de demonstrar minhas habilidades t\u00e9cnicas e minha experi\u00eancia profissional.",
  "Por esse motivo, a divulga\u00e7\u00e3o do link \u00e9 estritamente proibida. A visualiza\u00e7\u00e3o \u00e9 permitida somente com minha autoriza\u00e7\u00e3o pr\u00e9via, e qualquer forma de compartilhamento n\u00e3o autorizado ser\u00e1 considerada inadequada.",
  "Ressalto ainda que os c\u00f3digos e identifica\u00e7\u00f5es relacionados aos direitos autorais da empresa n\u00e3o est\u00e3o dispon\u00edveis neste ambiente e n\u00e3o ser\u00e3o exibidos ou compartilhados sob nenhuma circunst\u00e2ncia.",
  "Para mais informa\u00e7\u00f5es ou para conhecer o site original, acesse diretamente o endere\u00e7o oficial da Hagan\u00e1.",
];

export default function Home() {
  const [isNoticeOpen, setIsNoticeOpen] = useState(true);

  return (
    <>
      {isNoticeOpen ? (
        <div className="home-notice" role="dialog" aria-modal="true">
          <div
            className="home-notice__backdrop"
            onClick={() => setIsNoticeOpen(false)}
          ></div>
          <section className="home-notice__dialog" aria-labelledby="home-notice-title">
            <button
              type="button"
              className="home-notice__close"
              aria-label="Fechar aviso"
              onClick={() => setIsNoticeOpen(false)}
            >
              x
            </button>
            <h2 id="home-notice-title">Aviso de Propriedade e Uso Restrito</h2>
              {noticeParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </section>
        </div>
      ) : null}
      <div className="home__bg"></div>
      <main className="home">
        <div className="destaque">
          <div className="fundo">
            <img src={predioHagana} alt="Imagem do prédio da Haganá" />
          </div>
          <div className="destaque-noticia">
            <header className="destaque-noticia__header">BREAKING NEWS</header>
            <div className="destaque-noticia__text">
              <HighlightText
                Text="SEGURANÇA EM TEMPO REAL"
                Classname="text-high"
              />
              <HighlightText Text="NOTÍCIAS AO VIVO" Classname="text-medium" />
              <HighlightText
                Text="O portal de notícias da Tevel unido à Haganá"
                Classname="text-low"
              />
            </div>
            <footer className="destaque-noticia__footer">ACESSE AGORA</footer>
          </div>
        </div>
        <div className="valores">
          <div className="missao">
            <img src={visao} alt="" />
            <h1>MISSÃO</h1>
            <p>
              Garantir aos clientes tranquilidade e confiança em segurança
              patrimonial e pessoal, soluções em terceirização utilizando
              inovações tecnológicas, com profissionais qualificados e dentro de
              nossos princípios éticos.
            </p>
          </div>
          <div className="visao principal">
            <img src={missao} alt="" />
            <h1>VISÃO</h1>
            <p>
              Ser referência e sinônimo de qualidade em segurança patrimonial e
              pessoal, soluções em terceirização e inovações tecnológicas.
            </p>
          </div>
          <div className="valor">
            <img src={visao} alt="" />
            <h1>VALORES</h1>
            <p>
              Foco no Resultado – Reconhecimento e Valorização das Pessoas –
              Excelência e Qualidade no Atendimento ao Cliente Interno e Externo
              – Valores Éticos (Atitude).
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
