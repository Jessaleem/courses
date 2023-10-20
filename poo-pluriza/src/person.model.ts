import { Dog } from './dog.model';

export class Person {
  private readonly _name: string;
  private readonly _age: number;
  private readonly _height: number;
  private readonly _pets: Dog[];

  constructor(name: string, age: number, height: number, pets = [] as Dog[]) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._pets = pets;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get pets() {
    return this._pets;
  }

  addPet(dog: Dog) {
    this._pets.push(dog);
    return this.pets;
  }
}
