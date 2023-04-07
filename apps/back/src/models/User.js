const Model = require('./index')

const visibilityPlugin = require('objection-visibility').default

class User extends visibilityPlugin(Model) {
  static get tableName() {
    return 'usuarios'
  }

  static get hidden() {
    return 'senha'
  }
}

module.exports = User