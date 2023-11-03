export class Breakup {
  description: string = 'breakup';
  reason: string;
  date: Date;

  constructor(reason: string) {
    this.reason = reason;
    this.date = new Date();
  }

  getReason(): string {
    return this.reason;
  }

  getDate(): Date {
    return this.date;
  }

  toString(): string {
    return `Breakup: ${this.description}\nReason: ${
      this.reason
    }\nDate: ${this.date.toISOString()}`;
  }
}
