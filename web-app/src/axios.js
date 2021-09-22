import axios from 'axios'
const baseUrl = 'https://localhost:4000'

export const login = async ({ email, password }) => {
  try {
    const result = await axios({
      method: 'POST',
      url: baseUrl + '/login',
      data: {
        email,
        password
      },
      headers: {
        XMLHttpRequest,
        ContentType: 'application/json'
      }
    })
    return { data: result.data }
  } catch (err) {
    return {
      error: { status: err.response.status, data: err.response.data.error }
    }
  }
}

export const signup = async ({ firstName, lastName, email, password }) => {
  try {
    const result = await axios({
      method: 'POST',
      url: baseUrl + '/signup',
      data: {
        firstName,
        lastName,
        email,
        password
      },
      headers: {
        XMLHttpRequest,
        ContentType: 'application/json'
      }
    })
    return { data: result.data }
  } catch (err) {
    return {
      error: { status: err.response.status, data: err.response.data.error }
    }
  }
}
