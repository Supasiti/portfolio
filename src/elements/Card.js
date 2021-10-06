import { PropTypes } from 'prop-types'

// Style
const bgColorStyle = (color) => {
  const list = {
    dark: 'bg-teal',
    brand: 'bg-gradient-to-br from-java to-teal',
    gold: 'bg-gradient-to-br from-gold to-sandy',
    burnt: 'bg-gradient-to-br from-sandy to-burnt',
    white: 'bg-gradient-to-br from-gray-300 to-gray-400',
  }
  if (color in list) return list[color]
  return ''
}
const roundStyle = (isCircular) => (isCircular ? 'rounded-full' : 'rounded-2xl')
const shadowStyle = (hasShadow) => (hasShadow ? 'shadow-xl' : '')

const style = ({
  color = '',
  shadow = true,
  extend = '',
  isCircular = false,
}) => {
  const base = `w-full h-full`
  return `
    ${base} 
    ${roundStyle(isCircular)}
    ${bgColorStyle(color)} 
    ${shadowStyle(shadow)} 
    ${extend}`
}

//  render Card
const Card = (props) => <div className={style(props)}>{props.children}</div>

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
