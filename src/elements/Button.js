import { PropTypes } from 'prop-types'

// Style
const bgColorStyle = (color) => {
  const list = {
    brand: 'bg-gradient-to-br from-java to-teal',
    gold: `bg-gradient-to-br from-gold to-sandy text-teal 
      hover:-translate-y-0.5 transform transition
      focus:ring focus:ring-sandy focus:ring-offset-1 focus:outline-none`,

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
  const base = `inline-block px-3 py-2`
  return `
    ${base} 
    ${roundStyle(isCircular)}
    ${bgColorStyle(color)} 
    ${shadowStyle(shadow)} 
    ${extend}`
}

// render
const Button = (props) => (
  <button
    className={style(props)}
    type={props.isSubmit ? 'submit' : 'button'}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}
export default Button
