import { Person, Relationship, Breakup } from '.';

const amaka = new Person('Amaka');
const segun = new Person('Segun');

segun.setStingyMode(true);

const relationship = new Relationship(segun, amaka);

if (segun.isStingy() && relationship.isProblematic()) {
  const breakupReason = "It's not working out.";
  const breakup = new Breakup(breakupReason);
  amaka.serve(segun, breakup);
}
