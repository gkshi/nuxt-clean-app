/**
 * API wrapper v1.0.1
 */

import axios from 'axios'
// import Cookie from 'js-cookie'
import methods from './methods'

const API_BASE_URL = process.env.NUXT_ENV_API_BASE_URL || ''
const SUCCESS_STATUSES = [200, 204]

export const API = {
  /**
   * General API wrapper
   * @param method {string}
   * @param url {string}
   * @param data {object}
   * @param headers {object}
   */
  do (method = 'GET', url = '', data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      const options = {
        method,
        url: `${API_BASE_URL}${url}`,
        headers: {
          // Authorization: `Bearer ${Cookie.get('token')}`,
          // 'Content-Type': 'application/json',
          ...headers
        }
      }
      method === 'GET' ? options.params = data : options.data = data

      axios(options).then(res => {
        if (SUCCESS_STATUSES.includes(res.status)) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }).catch(err => {
        try {
          reject(err.response.data)
        } catch (e) {
          reject(err)
        }
      })
    })
  },

  ...methods
}

export default API
