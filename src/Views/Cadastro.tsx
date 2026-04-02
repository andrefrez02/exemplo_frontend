import megafone from "../Content/Imagens/megafone.svg";
import predioHagana from "../Content/Imagens/predio-hagana.png";
import jornalista from "../Content/Imagens/jornalista.gif";

export default function cadastro() {
  const renderizarItens2 = () => {
    const elementos = [];

    for (let i = 0; i < 12; i++) {
      elementos.push(
        <div key={i} className="cadastro-form__group_2-input">
          <img src={megafone} alt="" />
          <span>Invasão</span>
        </div>
      );
    }

    return elementos;
  };

  const renderizarItens3 = () => {
    const elementos = [];
    const nomes = ["STATUS", "LOCALIZAÇÃO", "TESTE", "TESTE 02"];
    const html = ["status", "localizacao", "teste", "teste02"];

    for (let i = 0; i < 6; i++) {
      let j = 0;
      j = i % 4;
      elementos.push(
        <div className="cadastro-form__group_4-input-group">
          <label htmlFor={html[j] + "-" + i}>{nomes[j]}:</label>
          <select name={html[j]} id={html[j] + "-" + i}>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
          </select>
        </div>
      );
    }

    return elementos;
  };

  const renderizarItens = () => {
    const elementos = [];
    const nomes = ["o-Título", "o-Subtítulo", "a-Descrição", "o-Impacto"];
    const html = ["titulo", "subtitulo", "descricao", "impacto"];
    const tipos = ["text", "text", "text", "text"];

    for (let i = 0; i < 12; i++) {
      let j = 0;
      j = i % 4;
      elementos.push(
        <div key={i} className="cadastro-form__input-group">
          <label htmlFor={html[j] + "-" + i}>{nomes[j].split("-")[1]}: </label>
          <input
            type={tipos[j]}
            name={html[j]}
            id={html[j] + "-" + i}
            placeholder={`Digite ${nomes[j].split("-")[0]} ${
              nomes[j].split("-")[1]
            }...`}
          />
        </div>
      );
    }

    return elementos;
  };

  return (
    <>
      <div className="cadastro__bg"></div>
      <main className="cadastro">
        <form action="/noticias" className="cadastro-form">
          <div className="cadastro-form__header">
            <div className="cadastro-form__header-bg">
              <img src={megafone} alt="" />
              <h1>CADASTRO DE NOTÍCIAS E OCORRÊNCIAS</h1>
              <a href="/" className="cancelBtn">
                CANCELAR <span>X</span>
              </a>
            </div>
          </div>

          <h2 className="cadastro-form__titulo">Dados da ocorrência:</h2>
          <div className="cadastro-form__group">{renderizarItens()}</div>
          <div className="cadastro-form__hr"></div>

          <h2 className="cadastro-form__titulo">Tipo de ocorrência:</h2>
          <div className="cadastro-form__group_2">{renderizarItens2()}</div>
          <div className="cadastro-form__hr"></div>

          <h2 className="cadastro-form__titulo">Nivel de Impacto:</h2>
          <div className="cadastro-form__group_3">
            <div className="cadastro-form__group_3-input grande">
              <img src={megafone} alt="" />
              <span>Grande Impacto</span>
            </div>
            <div className="cadastro-form__group_3-input medio">
              <img src={megafone} alt="" />
              <span>Médio Impacto</span>
            </div>
            <div className="cadastro-form__group_3-input pequeno">
              <img src={megafone} alt="" />
              <span>Pequeno Impacto</span>
            </div>
          </div>
          <div className="cadastro-form__hr"></div>

          <h2 className="cadastro-form__titulo">Informações Adicionais:</h2>
          <div className="cadastro-form__group_4">{renderizarItens3()}</div>
          <div className="cadastro-form__hr"></div>

          <h2 className="cadastro-form__titulo">Detalhes de Vídeo:</h2>
          <div className="cadastro-form__group_5">
            <div className="cadastro-form__input-group">
              <label htmlFor="upload">UPLOAD DE MÍDIA: </label>
              <input
                type="file"
                name="upload"
                id="upload"
                placeholder="Selecionar arquivo..."
              />
              <div className="cadastro-form__checkbox-group">
                <div className="cadastro-form__checkbox-group-item">
                  <input type="checkbox" name="headline" id="headline" />
                  <label htmlFor="headline">Marcar como Breaking News</label>
                </div>
                <div className="cadastro-form__checkbox-group-item">
                  <input type="checkbox" name="alerta" id="alerta" />
                  <label htmlFor="alerta">Enviar Alerta</label>
                </div>
              </div>
            </div>
          </div>
          <div className="cadastro-form__group_6">
            <div className="cadastro-form__group_6-thumbs">
              <div className="thumb">
                <img src={predioHagana} alt="" />
              </div>
              <div className="thumb">
                <img src={jornalista} alt="" />
              </div>
            </div>
            <div className="cadastro-form__group_6-input">
              <textarea
                name="descricao"
                id="descricao"
                placeholder="Digite a descrição da Ocorrência"
              ></textarea>
            </div>
          </div>

          <div className="cadastro-form__hr"></div>

          <div className="cadastro-form__button-group">
            <button
              type="submit"
              id="btnSubmit"
              className="cadastro-form__submit"
            >
              PUBLICAR AGORA
            </button>

            <button
              type="submit"
              id="btnSave"
              className="cadastro-form__save btnSave"
            >
              SALVAR COMO RASCUNHO
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
