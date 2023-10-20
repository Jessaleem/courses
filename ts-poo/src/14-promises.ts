import axios from 'axios';
(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const res2 = axios.get('https://api.escuelajs.co/api/v1/products');
    return res2;
  }

  async function getProductsAsync() {
    const res2 = await axios.get('https://api.escuelajs.co/api/v1/products');
    return res2;
  }

  console.log('---'.repeat(10));

  const res = await delay(3000);
  console.log(res);

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsv2 = await getProductsAsync();
  console.log(productsv2);
})();
