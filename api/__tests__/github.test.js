const github = require('../github')
jest.mock(`../request`)
// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return github.getUser('vnglst')
    .then(data => {
      expect(data).toBeDefined()
      console.log( JSON.stringify(data.entity, null, 1))
      expect(data.entity.name).toEqual('Koen van Gilst')
    })
  })

  it('should load user data ezmobius', () => {
    return github.getUser('ezmobius')
    .then(data => {
      expect(data).toBeDefined()
      console.log( JSON.stringify(data.entity, null, 1))
      expect(data.entity.name).toEqual('Ezra Zygmuntowicz')
    })
  })

})

