import axios from 'axios';
import { Product } from './models/product.model';

/*Formas de tipar:
1. Externa
 async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;

2. Interna con Axios
    async function getProducts(): {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
3. Interna sin depender de la librería (Forzando tipado):
    async function getProducts(): {
    const res = await axios.(
      'https://api.escuelajs.co/api/v1/products'
    );
    const data = res.data as Product[];
    return data;
*/

(async () => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
