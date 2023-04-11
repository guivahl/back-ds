const Model = require('./index');
const User = require('./User');
const Class = require('./Class');
const Review = require('./Review');
const Proposal = require('./Proposal');

class Professor extends Model {
  static get tableName() {
    return 'professors';
  }

  static get idColumn() {
    return 'userEmail';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'professors.userEmail',
          to: 'users.email',
        },
      },
      classes: {
        relation: Model.HasManyRelation,
        modelClass: Class,
        join: {
          from: 'professors.userEmail',
          to: 'classes.coordinatorEmail',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'professors.userEmail',
          to: 'reviews.reviewerEmail',
        },
      },
      proposals: {
        relation: Model.HasManyRelation,
        modelClass: Proposal,
        join: {
          from: 'professors.userEmail',
          to: 'proposals.advisorEmail',
        },
      },
    };
  }
}

module.exports = Professor;
