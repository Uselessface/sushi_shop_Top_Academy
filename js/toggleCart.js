function toggleCartStatus() {
    const emptyCart = document.querySelector('[data-cart-empty]')
    const orderForm = document.querySelector('#order-form')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const deliveryBox = document.querySelector('.delivery-box')
    if(cartWrapper.childNodes.length === 0){
        emptyCart.classList.remove('none')
        orderForm.classList.add('none')
        deliveryBox.classList.add('none')
    }
    if(cartWrapper.childNodes.length > 0){
        emptyCart.classList.add('none')
        orderForm.classList.remove('none')
        deliveryBox.classList.remove('none')
    }
}