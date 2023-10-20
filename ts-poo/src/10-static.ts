console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 3, 2, 8, 1, 0));

// Con static permite llamar a la librería y ejecutar, sin necesidad de instanciar la clase
// Con readonly garantizo que el valor sea de solo lectura

class MyMath {
  static readonly PI = 3.14;
  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

// const math = new MyMath(); -> instancia de My math
// math.PI;

console.log('MyMath.PI', MyMath.PI);
const numbers = [2, 5, 126, 15, 14, 1];
console.log('MyMax', MyMath.max(...numbers));
