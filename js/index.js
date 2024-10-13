const superSop = () => {
    const orderListOne =  document.getElementById('order-list-1');
    const orderListTwo =  document.getElementById('order-list-2');
  
    const fist = orderListOne.value;
    const second = orderListTwo.value;
  
      orderListOne.value = ''
      orderListTwo.value = ''
  
    displayShow(fist, second)
    saveProductToLocalStorage(fist, second);
  };

const displayShow = (fist , second) => {
    const li = document.createElement('li')
    li.innerHTML = `${fist} : ${second}`
    document.getElementById('list').appendChild(li);
};

const getStoreShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart')
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart;
}

const saveProductToLocalStorage = (fist, second) => {
  const cart = getStoreShoppingCart();
  cart[fist] = second;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const displayProductsFromLocalStorage = () => {
  const saveCart = getStoreShoppingCart();
  for (const product in saveCart) {
    const second = saveCart[product];
    console.log(product, second);
    displayShow(product, second); 
  }
};

displayProductsFromLocalStorage();
