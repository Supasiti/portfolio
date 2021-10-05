import { PropTypes } from 'prop-types'
import Button from './Button'

const NavItem = ({ onClick, isCurrentPage = false, text = '' }) => {
  if (isCurrentPage) {
    return (
      <Button color="java" shadow={false} extend="sm:px-4">
        {text}
      </Button>
    )
  }
  return (
    <Button color="teal" onClick={onClick} shadow={false} extend="sm:px-4">
      {text}
    </Button>
  )
}

NavItem.propTypes = {
  text: PropTypes.string,
  isCurrentPage: PropTypes.bool,
  onClick: PropTypes.func,
}
export default NavItem
