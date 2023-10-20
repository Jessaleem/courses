//Al colocar la palabra abstract en la clase, no permite que se instancie, solo se puede extedender.
import { Animal, Dog } from './09-protected';

// const animal = new Animal('elite');
// console.log(animal.greeting());

const bolt = new Dog('Bolt', 'Lucy');
bolt.greeting();
bolt.woof(2);
