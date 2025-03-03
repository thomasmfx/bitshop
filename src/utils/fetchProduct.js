async function fetchProduct(productId) {
  try {
    const data = await fetch(
      `https://dummyjson.com/products/${productId}`,
    ).then((res) => res.json())
    return data
  } catch (error) {
    console.error('Error: ', error)
    return {}
  }
}

export default fetchProduct
