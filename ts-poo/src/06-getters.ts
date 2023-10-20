export class MyDate {
  //todos los getters deben retornar un valor

  constructor(
    public year: number = 2016,
    public month: number = 9,
    private _day: number = 1
  ) {}

  //Method printFormat
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
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
      this.month += amount;
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
}

const myDate = new MyDate(1987, 10, 14);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 10, 14);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 10, 14);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 10, 14);
console.log('2004', myDate4.isLeapYear);
