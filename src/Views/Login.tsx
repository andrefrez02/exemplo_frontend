export default function Login() {
  const css = `html, #root {
    height: -webkit-fill-available;
  }`;
  return (
    <>
      <style>{css}</style>
      <div className="login__bg"></div>
      <main className="login">
        <form action="/noticias" className="login-form">
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
            <a href="/" className="login-form__link">
              Esqueceu a senha?
            </a>
            <a href="/" className="login-form__link">
              Não tem uma conta? Cadastre-se
            </a>
          </div>
        </form>
      </main>
    </>
  );
}
