const Model = require('./index');
const User = require('./User');

class Admin extends Model {
  static get tableName() {
    return 'admins';
  }

  static get idColumn() {
    return 'emailUsuario';
  }

  static relationMappings = {
    usuario: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'admins.emailUsuario',
        to: 'usuarios.email',
      },
    },
  };
}

module.exports = Admin;
