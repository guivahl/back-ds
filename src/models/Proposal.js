const Model = require('./index');

class Proposal extends Model {
  static get tableName() {
    return 'proposals';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    const Student = require('./Student');
    const Class = require('./Class');
    const Review = require('./Review');
    const Professor = require('./Professor');

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
      reviewers: {
        relation: Model.ManyToManyRelation,
        modelClass: Professor,
        join: {
          from: 'proposals.id',
          through: {
            from: 'reviews.proposalId',
            to: 'reviews.reviewerEmail',
          },
          to: 'professors.userEmail',
        },
      },
    };
  }
}

module.exports = Proposal;
