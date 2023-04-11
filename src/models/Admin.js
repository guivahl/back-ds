const Model = require('./index');
const Usuario = require('./Usuario');

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
      modelClass: Usuario,
      join: {
        from: 'admins.emailUsuario',
        to: 'usuarios.email',
      },
    },
  };
}

module.exports = Admin;
