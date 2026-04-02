import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const css = `html, #root {
    height: -webkit-fill-available;
  }`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/noticias");
  };

  return (
    <>
      <style>{css}</style>
      <div className="login__bg"></div>
      <main className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__header">
            <h1>Acesse sua conta</h1>
          </div>
          <div className="login-form__input-group">
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Nome de usuário..."
            />
            <input
              type="password"
              name="pasw"
              id="pasw"
              placeholder="Senha..."
            />
          </div>
          <button type="submit" id="btnSubmit" className="login-form__submit">
            Entrar
          </button>
          <div className="login-form__link-group">
            <Link to="/" className="login-form__link">
              Esqueceu a senha?
            </Link>
            <Link to="/cadastro" className="login-form__link">
              Não tem uma conta? Cadastre-se
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
