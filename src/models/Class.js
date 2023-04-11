const Model = require('./index');
const Student = require('./Student');
const Professor = require('./Professor');

class Class extends Model {
  static get tableName() {
    return 'classes';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      students: {
        relation: Model.ManyToManyRelation,
        modelClass: Student,
        join: {
          from: 'classes.id',
          through: {
            from: 'studentsClasses.classId',
            to: 'studentsClasses.studentEmail',
          },
          to: 'students.userEmail',
        },
      },
      coordinator: {
        relation: Model.BelongsToOneRelation,
        modelClass: Professor,
        join: {
          from: 'classes.coordinatorEmail',
          to: 'professors.userEmail',
        },
      },
    };
  }
}

module.exports = Class;
