import { PropTypes } from 'prop-types'

const HiddenDiv = ({ isShowing = false, extend = '', children }) => {
  const style = `${isShowing ? 'block' : 'hidden'} ${extend}`

  return <div className={style}>{children}</div>
}

HiddenDiv.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  extend: PropTypes.string,
  children: PropTypes.node,
}
export default HiddenDiv
