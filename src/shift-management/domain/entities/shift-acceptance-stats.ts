export class ShiftApplicantsStats {
  statusDeclined: number;
  statusAccepted: number;
  percentageOfAcceptance: number;
  constructor(
    statusDeclined: number,
    statusAccepted: number,
    percentageOfAcceptance: number,
  ) {
    this.statusAccepted = statusAccepted;
    this.statusDeclined = statusDeclined;
    this.percentageOfAcceptance = percentageOfAcceptance;
  }

  static create(
    statusDecline: number,
    statusAccepted: number,
    percentageOfAcceptance: number,
  ): ShiftApplicantsStats {
    return new ShiftApplicantsStats(
      statusDecline,
      statusAccepted,
      percentageOfAcceptance,
    );
  }
}
