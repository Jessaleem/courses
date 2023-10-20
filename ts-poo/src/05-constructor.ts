export class MyDate {
  //Forma corta de definir y asignar las propiedades, se debe colocar el acceso (public o private)
  //Si no se coloca el acceso no se puede generar el acortamiento y solo se tendría acceso en ese método (constructor)
  constructor(
    public year: number = 2016,
    public month: number = 9,
    public day: number = 1
  ) {}

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

const myDate = new MyDate(1987, 10, 14);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2005);
console.log('(2005) =>', myDate3.printFormat());

const myDate4 = new MyDate(2005, 2);
console.log('(2005, 2) =>', myDate4.printFormat());
