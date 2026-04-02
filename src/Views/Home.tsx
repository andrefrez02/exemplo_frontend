import predioHagana from "../Content/Imagens/predio-hagana.png";
import visao from "../Content/Imagens/megafone.svg";
import missao from "../Content/Imagens/israel-brasil.png";
import HighlightText from "../Components/HighlightText";

export default function Home() {
  return (
    <>
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
