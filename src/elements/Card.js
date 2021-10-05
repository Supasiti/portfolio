import { PropTypes } from 'prop-types'

// Style
const bgColorStyle = (color) => {
  const list = {
    brand: 'bg-gradient-to-br from-java to-teal',
    gold: 'bg-gradient-to-br from-gold to-sandy',
    burnt: 'bg-gradient-to-br from-sandy to-burnt',
  }
  if (color in list) return list[color]
  return ''
}

const shadowStyle = (hasShadow) => (hasShadow ? 'shadow-xl' : '')

const style = ({ color = '', shadow = true, extend = '' }) => {
  const base = ` w-full h-full rounded-2xl`
  return `${base} ${bgColorStyle(color)} ${shadowStyle(shadow)} ${extend}`
}

//  render Card
const Card = (props) => <div className={style(props)}>{props.children}</div>

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
