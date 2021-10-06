import { useState } from 'react'
import TextArea from '../elements/TextArea'
import TextInput from '../elements/TextInput'
import Button from '../elements/Button'
import { validateName, validateEmail, validateMessage } from '../utils/validate'

const defaultMessage = {
  name: '',
  email: '',
  message: '',
}

const validation = {
  name: {
    validate: validateName,
    message: 'Name cannot not be empty',
  },
  email: {
    validate: validateEmail,
    message: 'Incorrect email format',
  },
  message: {
    validate: validateMessage,
    message: 'Message cannot be empty',
  },
}

const hasError = (message, setError) => {
  const keys = Object.keys(validation)
  const result = keys.some((key) => {
    const form = validation[key]
    const isValid = form.validate(message[key])
    if (isValid) return false
    setError(form.message)
    return true
  })
  return result
}

// render
const ContactForm = () => {
  const [message, setMessage] = useState(defaultMessage)
  const [error, setError] = useState('')

  const handleDataChange = (key, value) => {
    if (key in message) {
      const newMessage = { ...message, [key]: value }
      setMessage(newMessage)
      if (error) setError('')
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (hasError(message, setError)) return
    setMessage(defaultMessage)
  }

  const handleClickOutside = (ref) => {
    if (ref.name in validation) {
      const form = validation[ref.name]
      const isValid = form.validate(ref.value)
      if (!isValid) setError(form.message)
    }
  }

  return (
    <form className="space-y-4">
      <TextInput
        type="text"
        name="name"
        idName="name"
        label="Name"
        placeholder="Andre the Giant"
        onDataChange={handleDataChange}
        onClickOutside={handleClickOutside}
        value={message.name}
      />
      <TextInput
        type="email"
        name="email"
        idName="email"
        label="Email"
        placeholder="andre@giant.com"
        onDataChange={handleDataChange}
        onClickOutside={handleClickOutside}
        value={message.email}
      />
      <TextArea
        name="message"
        idName="message"
        label="Message"
        placeholder="Your message"
        onDataChange={handleDataChange}
        onClickOutside={handleClickOutside}
        value={message.message}
      />

      <p className="text-burnt text-lg text-center">{error}</p>

      <Button isSubmit onClick={handleFormSubmit} color="gold" extend="w-full">
        Submit
      </Button>
    </form>
  )
}
export default ContactForm
