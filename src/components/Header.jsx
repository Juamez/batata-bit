import logo from '../assets/imgs/logo.svg'

const Header = () => {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>La próxima revolución en el intercambio de criptomonedas.</h4>
          <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
          <button>
            Conoce Nuestros Planes
            <span></span>
          </button>
      </header>
    )
}

export default Header