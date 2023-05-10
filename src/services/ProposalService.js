class ProposalService {
  static proposalStatus = (proposal) => {
    const today = new Date().toISOString();
    const endDate = new Date(proposal.class.endDate).toISOString();

    if (endDate < today) return 'Finalizado';
    if (proposal.reviews.length <= 0) return 'Pendente';

    if (proposal.reviews.some((element) => element.wasApproved === false)) return 'Reprovado';
    if (proposal.reviews.every((element) => element.wasApproved === true)) return 'Aprovado';

    return 'Pendente';
  };
}

module.exports = ProposalService;
