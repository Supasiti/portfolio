import { PropTypes } from 'prop-types'

const NavItem = ({ text = '', onClick }) => (
  <button type="button" onClick={onClick} className="hover:text-gold shadow-md">
    {text}
  </button>
)

NavItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}
export default NavItem
