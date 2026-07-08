import localidade from "../Content/Imagens/localidade.jpg";
import visao from "../Content/Imagens/megafone.webp";
import missao from "../Content/Imagens/brasil-brasil.png";
import HighlightText from "../Components/HighlightText";

// Disclaimer popup desativado
// const noticeParagraphs = [
//   "Este site foi integralmente desenvolvido por mim durante meu período de atuação na Vera, empresa na qual trabalhei anteriormente. Apesar de a codificação ter sido feita por mim, os direitos de uso e as licenças do site pertencem exclusivamente à referida empresa. O site está sendo exibido apenas para fins de portfólio e estudo, com o objetivo de demonstrar minhas habilidades técnicas e minha experiência profissional.",
//   "Por esse motivo, a divulgação do link é estritamente proibida. A visualização é permitida somente com minha autorização prévia, e qualquer forma de compartilhamento não autorizado será considerada inadequada.",
//   "Ressalto ainda que os códigos e identificações relacionados aos direitos autorais da empresa não estão disponíveis neste ambiente e não serão exibidos ou compartilhados sob nenhuma circunstância.",
//   "Para mais informações ou para conhecer o site original, acesse diretamente o endereço oficial da Vera.",
// ];

export default function Home() {
  // const [isNoticeOpen, setIsNoticeOpen] = useState(true);

  return (
    <>
      {/* Disclaimer popup desativado
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
      */}
      <div className="home__bg"></div>
      <main className="home">
        <div className="destaque">
          <div className="fundo">
            <img src={localidade} alt="Imagem da localidade da Vera" />
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
                Text="O portal de notícias da Vera"
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
