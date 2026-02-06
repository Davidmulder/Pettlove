import './styles.css'
import logoFooter from '../../assets/images/logorodape.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import youtube from '../../assets/images/youtube.png'
import seta from '../../assets/images/seta.png'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* GRID PRINCIPAL (desktop): linha 1 = brand/news | linha 2 = colunas/redes */}
        <div className="footer-grid">
          {/* esquerda topo */}
          <div className="footer-brand">
            <img className="footer-logo" src={logoFooter} alt="Pett Love" />
            <p className="footer-slogan">
              ENCONTROS PARA<br />TODOS ANIMAIS
            </p>
          </div>

          {/* direita topo */}
          <div className="footer-news">
            <h3>Receba nossas novidades</h3>

            <form className="footer-form">
              <div className="footer-input-group">
                <input type="email" placeholder="Digite seu e-mail" />
                <button type="button">Cadastrar</button>
              </div>
            </form>
          </div>

          {/* esquerda linha 2 */}
          <div className="footer-middle">
            <div className="footer-col">
              <h4>Sobre nós</h4>
              <a href="#">Como funciona</a>
              <a href="#">Dúvidas frequentes</a>
              <a href="#">Blog</a>
            </div>

            <div className="footer-col">
              <h4>Pets namorando</h4>
              <a href="#">Comece agora!</a>
              <a href="#">Contato</a>
            </div>

            <div className="footer-col">
              <h4 className="ajude">Ajude uma entidade</h4>
              <p className="footer-small">SOS Vida Animal</p>
              <p className="footer-small">Banco Itaú: Ag 8804 Conta 01234-5</p>
              <p className="footer-small">PIX: 43.660.696/0001-95</p>
            </div>
          </div>

          {/* direita linha 2 (AGORA ALINHA COM AS COLUNAS) */}
          <nav className="footer-social" aria-label="Redes sociais">
            <a href="#" aria-label="Facebook"><img src={facebook} alt="" /></a>
            <a href="#" aria-label="Instagram"><img src={instagram} alt="" /></a>
            <a href="#" aria-label="YouTube"><img src={youtube} alt="" /></a>
          </nav>
        </div>

        {/* políticas */}
        <div className="footer-bottom">
          <div className="footer-policies">
            <a href="#">Política de privacidade</a>
            <span>•</span>
            <a href="#">Termos de uso</a>
            <span>•</span>
            <a href="#">Política de Cookies</a>
            <span>•</span>
            <a href="#">Política de cancelamento</a>
          </div>
        </div>

        {/* MOBILE: CNPJ + clickweb abaixo das redes */}
        <p className="footer-cnpj-mobile">
          Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95
        </p>
        <p className="footer-clickweb-mobile">clickweb</p>

        {/* MOBILE: seta central */}
        <button
          className="footer-arrow-mobile"
          type="button"
          onClick={scrollTop}
          aria-label="Voltar ao topo"
        >
          <img src={seta} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* DESKTOP: barra final */}
      <div className="footer-bottom-bar">
        <span className="footer-cnpj">
          Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95
        </span>

        <button
          className="footer-arrow-btn"
          type="button"
          onClick={scrollTop}
          aria-label="Voltar ao topo"
        >
          <img src={seta} alt="" aria-hidden="true" />
        </button>

        <span className="footer-clickweb">clickweb</span>
      </div>
    </footer>
  )
}
