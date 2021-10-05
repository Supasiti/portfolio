import { PropTypes } from 'prop-types'

// style
const parseWidth = (width) => {
  const segments = width.split(' ').map((w) => w.split('-'))
  const widths = segments.map((segment) =>
    segment.length === 1 ? `w-${segment}` : `${segment[0]}:w-${segment[1]}`,
  )
  const result = widths.join(' ')
  return result
}

// render
const Col = ({ children, width = 'full', extend = '' }) => (
  <div className={`${parseWidth(width)} ${extend}`}>{children}</div>
)

Col.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  extend: PropTypes.string,
}
export default Col
