const urls = [
  'https://dummyjson.com/products/category/laptops',
  'https://dummyjson.com/products/category/tablets',
  'https://dummyjson.com/products/category/mobile-accessories',
];

async function fetchProducts() {
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((res) => res.json()),
    );

    const jsons = await Promise.all(fetchPromises);
    const data = jsons.flatMap((json) => json.products);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    return [];
  }
}

export default fetchProducts;
