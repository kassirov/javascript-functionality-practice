const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (name.value.length <= 6) {
    messages.push('Name must be longer than 6')
  }

  if (password.value.length > 20) {
    messages.push('Password cannot be more than 20 characters')
  }

  if (password.value.length <= 6) {
    messages.push('Password needs to be longer than 6 characters')
  }

  if (password.value === 'password') {
        messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

