import { Dog } from './dog.model';
import { Person } from './person.model';

const carlos = new Person('Carlos', 35, 180);

const myPets = [new Dog('Firulais', '-', 2)];
const maria = new Person('Maria', 30, 160, myPets);

console.log('carlos', carlos.pets);
console.log('maria', maria.pets);

const newDog = new Dog('N.A', 'Pastor Aleman', 0.5);

maria.addPet(newDog);
carlos.addPet(newDog);

console.log('carlos2', carlos.pets);
console.log('maria2', maria.pets);
