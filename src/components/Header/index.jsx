import { Link } from 'react-router-dom'
//
import './index.css'

const Header = ({ title = 'page title', logo, nav, children }) => {
  return (
    <header className="lumina-header">
      {logo && <img src={logo} className="lumina-header-logo" alt="logo" />}
      <span className="lumina-header-title">{title}</span>

      <section className="lumina-header-nav">
        {nav && (
          <nav>
            {nav.map(item => {
              const [pageName, url] = item
              return (
                <Link to={url} key={pageName}>
                  {pageName}
                </Link>
              )
            })}
          </nav>
        )}
      </section>

      <section className="lumina-header-more">{children}</section>
    </header>
  )
}

export default Header
