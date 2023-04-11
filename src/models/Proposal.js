const Model = require('./index');
const Student = require('./Student');
const Class = require('./Class');
const Professor = require('./Professor');
const Review = require('./Review');

class Proposal extends Model {
  static get tableName() {
    return 'proposals';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      student: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'proposals.studentEmail',
          to: 'students.userEmail',
        },
      },
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: 'proposals.classId',
          to: 'classes.id',
        },
      },
      professor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Professor,
        join: {
          from: 'proposals.advisorEmail',
          to: 'professors.userEmail',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'proposals.id',
          to: 'reviews.proposalId',
        },
      },
    };
  }
}

module.exports = Proposal;
