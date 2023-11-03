import { Person } from './Person';

export class Relationship {
  partner1: Person;
  partner2: Person;

  constructor(person1: Person, person2: Person) {
    this.partner1 = person1;
    this.partner2 = person2;
  }

  isProblematic(): boolean {
    return this.partner1.isStingy() !== this.partner2.isStingy();
  }
}
