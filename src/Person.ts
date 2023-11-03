import { Breakup } from './Breakup';

export class Person {
  name: string;
  _isStingy: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  setStingyMode(isStingy: boolean): void {
    this._isStingy = isStingy;
  }

  serve(partner: Person, action: Breakup): void {
    console.log(
      `${this.name} serves ${partner.name} with a ${action.description}.`
    );
  }

  isStingy(): boolean {
    return this._isStingy;
  }
}
