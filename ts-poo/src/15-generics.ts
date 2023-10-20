import { Dog } from './08-herencia';
/* function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;

Generico: Se pasa el tipado como parametro, se debe especificar cuando se utilice la función
*/

function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([12, 13, 56]).forEach;

const bolt = new Dog('bolt', 'Lucy');
getValue<Dog>(bolt).move();
