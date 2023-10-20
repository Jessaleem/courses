export class Dog {
  constructor(
    private readonly _name: string,
    private readonly _race: string,
    private readonly _age: number
  ) {}

  get name(): any {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get humanAge() {
    return this._age * 7;
  }
}
