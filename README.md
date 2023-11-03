# naija-relationshipjs

A simple npm library for handling relationships, breakups, and more.

## Installation

You can install `naija-relationshipjs` using npm or yarn:

```bash
npm install naija-relationshipjs
# or
yarn add naija-relationshipjs
```

## Usage

### Basic Usage

```javascript
const { Person, Relationship, Breakup } = require('naija-relationshipjs');

const amaka = new Person('Amaka');
const segun = new Person('Segun');

segun.setStingyMode(true);

const relationship = new Relationship(segun, amaka);

if (segun.isStingy() && relationship.isProblematic()) {
  const breakupReason = "It's not working out.";
  const breakup = new Breakup(breakupReason);
  amaka.serve(segun, breakup);
}
```

### Person Class

The `Person` class represents a person in a relationship. You can use it to set stingy mode, serve actions, and check if the person is stingy.

```javascript
const person = new Person('John');
person.setStingyMode(true);
person.serve(partner, action);
person.isStingy();
```

### Relationship Class

The `Relationship` class represents a relationship between two persons. You can use it to check if the relationship is problematic.

```javascript
const relationship = new Relationship(person1, person2);
relationship.isProblematic();
```

### Breakup Class

The `Breakup` class represents a breakup action. You can create a breakup with a reason and access the reason and date of the breakup.

```javascript
const breakupReason = "It's not working out.";
const breakup = new Breakup(breakupReason);
breakup.getReason();
breakup.getDate();
```
