export class MyDate {
  //todos los getters deben retornar un valor

  constructor(
    public year: number = 2016,
    private _month: number = 9,
    private _day: number = 1
  ) {}

  //Method printFormat
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  //Method add
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  // Getter: Método para acceder externamente al día, teniendo en cuenta que es private, no permite modificar
  get day() {
    return this._day;
  }

  // Función que a la que se accede como una propiedad
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  // Permite acceder a la propiedad externamente
  get month() {
    return this._month;
  }

  // Permite modificar el valor de las propiedades, No debe retornar nada
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

const myDate = new MyDate(1987, 10, 14);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 13;
console.log('esto no debe aparecer', myDate.month);
