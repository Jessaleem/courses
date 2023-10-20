export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I am ${this.name}`;
  }
}

export class Dog extends Animal {
  //Extender propiedades
  constructor(name: string, public owner: string) {
    super(name); // super invoca a la clase padre que estamos heredando (constructor), solo se puede llamar desde el constructor del hijo
  }

  //Extender métodos
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const chase = new Dog('chase', 'Jess');
chase.move();
console.log(chase.greeting());
chase.woof(5);
console.log(chase.owner);
