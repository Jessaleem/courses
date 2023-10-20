export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Method printFormat
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(2016, 9, 1);

console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
