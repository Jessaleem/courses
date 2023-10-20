export class MyDate {
  //definir propiedades
  year: number;
  month: number;
  private day: number;

  //asignar propiedades
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Method printFormat
  printFormat(): string {
    const day = this.addPadding(this.day);
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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  // Método para acceder externamente al día, teniendo en cuenta que es private
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2016, 9, 1);

console.log(myDate.printFormat());
console.log(myDate.getDay());
