// Interfaces - contrato en donde todos deben cumplir con el estandar de todos Drivers

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
//   connect(): void {},
// };

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
    //code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {
    //code
  }
  disconect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
}
