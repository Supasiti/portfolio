import { useState } from 'react'
import TextArea from '../elements/TextArea'
import TextInput from '../elements/TextInput'
import Button from '../elements/Button'

const defaultMessage = {
  name: '',
  email: '',
  message: '',
}

// render
const ContactForm = () => {
  const [message, setMessage] = useState(defaultMessage)

  const handleDataChange = (key, value) => {
    if (key in message) {
      const newMessage = { ...message, [key]: value }
      setMessage(newMessage)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
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
        value={message.name}
      />
      <TextInput
        type="email"
        name="email"
        idName="email"
        label="Email"
        placeholder="andre@giant.com"
        onDataChange={handleDataChange}
        value={message.email}
      />
      <TextArea
        name="message"
        idName="message"
        label="Message"
        placeholder="Your message"
        onDataChange={handleDataChange}
        value={message.message}
      />

      <Button isSubmit onClick={handleFormSubmit}>
        Submit
      </Button>
    </form>
  )
}
export default ContactForm
