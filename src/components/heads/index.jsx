import './styles.css'
import logo from '../../assets/images/logo.png'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  const toggle = () => setOpen(v => !v)

  return (
    <header className="header">
      <div className="header-container">

        <button className="menu-btn" type="button" onClick={toggle}>
          Menu
        </button>

        <div className="logo">
          <img src={logo} alt="PetLove" />
        </div>

        <button className="login-btn" type="button">
          Entrar
        </button>

        {/* overlay + drawer */}
        <AnimatePresence>
          {open && (
            <>
              {/* fundo escuro */}
              <motion.div
                className="menu-overlay"
                onClick={close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* painel do menu */}
              <motion.nav
                className="menu-drawer"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <NavLink to="/" end className="menu-link" onClick={close}>
                  Pets namorando
                </NavLink>

                <NavLink to="/como-funciona" className="menu-link" onClick={close}>
                  Como funciona
                </NavLink>
              </motion.nav>
            </>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}
