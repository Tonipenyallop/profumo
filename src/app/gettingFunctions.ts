export function getElement(idx: number) {
  return document.getElementById(`${idx}`);
}
export function getChosenItemImage(element: any): string {
  if (!element) return "";
  const src = element?.querySelector("img")?.src;
  return src;
}
export function getChosenItemPrice(element: any): string {
  if (!element) return "";
  const price = element?.querySelector(".price").innerText;
  return price;
}
export function getChosenItemName(element: any): string {
  if (!element) return "";
  const name = element?.querySelector(".name").innerText;
  // const name = chosenChildren.innerText;
  return name;
}

export function getQuantity(element: any, cart: any): number {
  const nameOfBottle = getChosenItemName(element);
  let quantity: number = 0;
  for (let key in cart) if (key === nameOfBottle) quantity = cart[key];

  return quantity;
}

export function isMoreThanTwo(element: any, cart: any): boolean {
  const quantity = getQuantity(element, cart);
  return quantity === 1 ? true : false;
}

export function getTotalQuantity(cart: any): number {
  let total = 0;
  for (let key in cart) total += cart[key];
  return total;
}
