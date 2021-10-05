import { PropTypes } from 'prop-types'

const AbsoluteDiv = ({ position = '', extend = '', children }) => (
  <div className={`absolute ${position} ${extend}`}>{children}</div>
)

AbsoluteDiv.propTypes = {
  position: PropTypes.string,
  extend: PropTypes.string,
  children: PropTypes.node,
}
export default AbsoluteDiv
