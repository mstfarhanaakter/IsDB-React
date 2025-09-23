const saveCartToLocalStorage = cart => {
    // cart (array বা object) কে string এ রূপান্তর করি যাতে localStorage এ রাখা যায়
    const saveCartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", saveCartStringify);  // 'cart' নামে localStorage এ সেভ করলাম
}


const getCartFromStorage = () => {
    // localStorage থেকে 'cart' নামের ডাটা নিলাম (string আকারে)
    const storedCartString = localStorage.getItem('cart');

    if (storedCartString) {
        // যদি ডাটা পাওয়া যায়, তাহলে string থেকে JS object/array এ রূপান্তর করলাম
        const storedCart = JSON.parse(storedCartString);
        return storedCart;  // এবং ফিরিয়ে দিলাম
    }
    return [];  // যদি localStorage এ কিছু না থাকে, তাহলে খালি array ফিরিয়ে দিলাম
}

const addItemToLocalStorage = (id) => {
    const cart = getCartFromStorage();  // আগে থেকে localStorage এ যা আছে তা নিয়ে আসলাম
    console.log(cart);
    const newCart = [...cart, id];  // নতুন আইটেম id যোগ করলাম আগের array এর সাথে

    // আপডেট করা array আবার localStorage এ সেভ করলাম
    saveCartToLocalStorage(newCart);
}

const removeCartItem = (id) => {
    const storedCart = getCartFromStorage();
    const reaminingCart = storedCart.filter(storeId => storeId !==id)
    saveCartToLocalStorage(reaminingCart)

}

export {
    getCartFromStorage as getCartFromLocal,
    addItemToLocalStorage as addItemToLocal,
    removeCartItem as removeCart
}
