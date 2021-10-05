import { PropTypes } from 'prop-types'

const parseWidth = (width) => {
  const segments = width.split(' ').map((w) => w.split('-'))
  const widths = segments.map((segment) =>
    segment.length === 1 ? `w-${segment}` : `${segment[0]}:w-${segment[1]}`,
  )
  const result = widths.join(' ')
  return result
}

const Col = ({ children, width = 'full' }) => (
  <div className={parseWidth(width)}>{children}</div>
)

Col.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}
export default Col
