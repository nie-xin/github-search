import {
  URL_BASE,
  HEADER,
  TIMEOUT,
  ajaxInstance,
  default as apiService
} from '../../src/services/apiService'

describe('(Services) ajaxInstance', () => {
  let defaultProps

  beforeEach(() => {
     defaultProps = ajaxInstance.defaults
  })

  it('Should have pre-configed base url', () => {
    expect(defaultProps.baseURL).toBe(URL_BASE)
  })

  it('Should have pre-configed header', () => {
    const acceptList = defaultProps.headers.common['Accept'].split(',').map(str => str.trim())
    expect(acceptList).toContain(HEADER)
  })

  it('Shoule have pre-configed timeout', () => {
    expect(defaultProps.timeout).toBe(TIMEOUT)
  })
})

describe('(Services) getRepositories', () => {
  it('Should return error when username missing', () => {
    expect(() => apiService.getRepositories()).toThrow()
  })
})
