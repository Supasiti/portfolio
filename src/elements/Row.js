import { PropTypes } from 'prop-types'

const style = (extend) => `flex flex-row flex-wrap ${extend}`

const Row = ({ children, extend = '' }) => (
  <div className={style(extend)}>{children}</div>
)

Row.propTypes = {
  children: PropTypes.node,
  extend: PropTypes.string,
}
export default Row
