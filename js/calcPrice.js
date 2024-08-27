function calcPrice() {
    const total = document.querySelector('.total-price')
    const cartItems = document.querySelectorAll('.cart-item')
    const deliveryCost = document.querySelector('.delivery-cost')

    let totalPrice = 0
    cartItems.forEach(item => {
        const itemQuantity = item.querySelector('[data-counter]').innerText
        const itemPrice = item.querySelector('.price__currency').innerText
        const price = parseInt(itemQuantity) * parseInt(itemPrice)
        totalPrice += price
    })

     total.innerText = totalPrice

    if (totalPrice >= 600){
        deliveryCost.innerText = 'Бесплатно'
        deliveryCost.classList.add('free')
    }
    else if (totalPrice < 600) {
        deliveryCost.innerText = '250 ₽'
        deliveryCost.classList.remove('free')
    }
}