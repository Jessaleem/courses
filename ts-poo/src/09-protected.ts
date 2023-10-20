export abstract class Animal {
  //Con protected solo se puede utilizar de forma interna, permite heredarse

  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I am ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  //Extender propiedades
  constructor(name: string, public owner: string) {
    super(name); // super es un constructor que hace referencia a la clase padre que estamos heredando
  }

  //Extender métodos
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('Moving like a dog');
    super.move();
  }
}

const chase = new Dog('chase', 'Jess');
// chase.name = 'Bolt';
chase.woof(1);
chase.move();
