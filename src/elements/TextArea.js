import { PropTypes } from 'prop-types'
import { useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside'

// styling
const labelStyle = (idName) => {
  const result = {
    className: 'w-full mb-1 text-sm',
    id: `${idName}-label`,
    htmlFor: `${idName}-input`,
  }
  return result
}

const inputStyle = `w-full rounded-lg p-2 shadow-md
  border-gray-400 border-2 border-opacity-75 text-gray-700
  focus:border-sandy `

// render
const TextArea = ({
  onDataChange,
  onClickOutside,
  name = 'text',
  placeholder = 'text',
  label = 'text',
  value = '',
  idName = 'text',
}) => {
  const inputRef = useRef(null)
  const handleClickOutside = useClickOutside(inputRef, onClickOutside)

  const handleOnFocus = () => {
    document.addEventListener('mousedown', handleClickOutside)
  }

  const handleOnChange = (e) => {
    if (onDataChange) {
      onDataChange(name, e.target.value)
    }
  }

  const inputAttr = {
    id: `${idName}-input`,
    name,
    className: inputStyle,
    placeholder,
    value,
    ref: inputRef,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
  }

  return (
    <div className="w-full">
      <label {...labelStyle(idName)}>{label}</label>
      <textarea
        {...inputAttr}
        aria-label={idName}
        aria-describedby={`${idName}-label`}
      />
    </div>
  )
}
TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  idName: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onDataChange: PropTypes.func,
  onClickOutside: PropTypes.func,
}

export default TextArea
