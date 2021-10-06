import { PropTypes } from 'prop-types'

// Style
const bgColorStyle = (color) => {
  const list = {
    java: `bg-java shado shadow-xl`,
    teal: `bg-teal hover:bg-java hover:shadow-xl`,
    gold: `
      bg-gradient-to-br from-gold to-sandy text-teal 
      hover:-translate-y-0.5 transform transition
      focus:ring focus:ring-sandy focus:ring-offset-1 focus:outline-none`,
    white: 'bg-gradient-to-br from-gray-300 to-gray-400',
  }
  if (color in list) return list[color]
  return ''
}
const shadowStyle = (hasShadow) => (hasShadow ? 'shadow-xl' : '')

const style = ({
  color = '',
  shadow = true,
  extend = '',
  padding = 'px-2 py-2',
}) => {
  const base = `inline-block rounded-full`
  return `
    ${base} 
    ${padding}
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
