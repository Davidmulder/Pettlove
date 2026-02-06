import './styles.css'
import logo from '../../assets/images/logo.png'

export function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <button className="menu-btn">Menu</button>

        <div className="logo">
          <img src={logo} alt="PetLove" />
        </div>

        <button className="login-btn">Entrar</button>

      </div>
    </header>
  )
}
