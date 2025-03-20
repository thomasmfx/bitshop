export function storeCart(cart = []) {
  const jsonCart = JSON.stringify(cart);
  localStorage.setItem('cart', jsonCart);
}

export function retrieveCart() {
  if (localStorage.getItem('cart') === null) return [];

  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
}
