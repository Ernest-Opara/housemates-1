import axios from 'axios'
const baseUrl = 'http://localhost:4000'

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
