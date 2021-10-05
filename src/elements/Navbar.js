import { PropTypes } from 'prop-types'
import NavItem from './NavItem'

const menuContainer = `
  flex flex-row flex-grow justify-center md:justify-end
`

const pages = ['about', 'portfolio', 'contact', 'resume']

// render
const Navbar = ({ setCurrentPage, currentPage }) => {
  const handleClick = (e, page) => {
    e.preventDefault()
    if (setCurrentPage) {
      setCurrentPage(page)
    }
  }
  return (
    <div className="flex flex-row justify-between py-5">
      <h3 className="hidden md:inline-block">Tharatorn Supasiti</h3>
      <div className={menuContainer}>
        {pages.map((page) => (
          <NavItem
            isCurrentPage={page === currentPage}
            text={page}
            onClick={(e) => handleClick(e, page)}
            key={page}
          />
        ))}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  currentPage: PropTypes.string,
  setCurrentPage: PropTypes.func,
}
export default Navbar
