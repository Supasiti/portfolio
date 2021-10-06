const validateName = (name) => {
  const trimmed = name.trim()
  return !!trimmed
}
const validateEmail = (email) => {
  const pattern = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
  const result = pattern.test(email.trim())
  return result
}
const validateMessage = (message) => {
  const trimmed = message.trim()
  return !!trimmed
}

export { validateName, validateEmail, validateMessage }
