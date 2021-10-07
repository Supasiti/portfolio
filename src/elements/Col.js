import { PropTypes } from 'prop-types'

// render
const Col = ({ children, width = 'w-full', extend = '' }) => (
  <div className={`${width} ${extend}`}>{children}</div>
)

Col.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  extend: PropTypes.string,
}
export default Col
