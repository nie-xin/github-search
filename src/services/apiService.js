import axios from 'axios'
import normalizer from './normalizer'

export const URL_BASE = 'https://api.github.com'
export const HEADER = 'application/vnd.github.v3+json'
export const TIMEOUT = 3000

export const ajaxInstance = axios.create({
  baseURL: URL_BASE,
  timeout: TIMEOUT
})
ajaxInstance.defaults.headers.common['Accept'] += `, ${HEADER}`

const apiService = {
  getRepositories: (username) => {
    if (!username) {
      throw new Error('error: username missing')
    }

    return ajaxInstance.get(`/users/${username}/repos`)
      .then(normalizer)
  }
}

export default apiService
