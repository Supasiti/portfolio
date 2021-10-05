import { PropTypes } from 'prop-types'

const Container = ({ extend = '', children }) => {
  const style = `w-full lg:max-w-5xl xl:max-w-7xl mx-auto ${extend}`

  return <div className={style}>{children}</div>
}
Container.propTypes = {
  children: PropTypes.node,
  extend: PropTypes.string,
}
export default Container
