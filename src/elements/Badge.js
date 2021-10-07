import { PropTypes } from 'prop-types'

const Badge = ({ icon = <></>, title = '', text = '' }) => (
  <div className="flex flex-col justify-start items-center space-y-4 p-4 text-center">
    <div className="text-5xl text-gold">{icon}</div>
    <div className="text-sandy text-xl">{title}</div>
    <div className=" text-base">{text}</div>
  </div>
)

Badge.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
}
export default Badge
