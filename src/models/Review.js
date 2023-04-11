const Model = require('./index');
const Professor = require('./Professor');
const Proposal = require('./Proposal');

class Review extends Model {
  static get tableName() {
    return 'reviews';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      reviewer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Professor,
        join: {
          from: 'reviews.reviewerEmail',
          to: 'professors.userEmail',
        },
      },
      proposal: {
        relation: Model.BelongsToOneRelation,
        modelClass: Proposal,
        join: {
          from: 'reviews.proposalId',
          to: 'proposals.id',
        },
      },
    };
  }
}

module.exports = Review;
