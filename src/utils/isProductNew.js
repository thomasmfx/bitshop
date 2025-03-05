export default function isProductNew(product) {
  return product.id % 5 === 0
}
