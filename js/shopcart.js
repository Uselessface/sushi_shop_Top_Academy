document.addEventListener('click', function (e){
    const addButton = e.target
    if (addButton.hasAttribute('data-cart')){
        const card = addButton.closest('.card')
        const cartWrapper = document.querySelector('.cart-wrapper')
        const cardInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('img').src,
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            quantity: card.querySelector('[data-counter]').innerText
        }
        const cartItemId = cartWrapper.querySelector(`[data-id="${cardInfo.id}"]`)
        if (!cartItemId){
            renderCartItem(cardInfo,cartWrapper)
        }
        else{
            const itemQuantity = cartItemId.querySelector('[data-counter]')
            itemQuantity.innerText = parseInt(itemQuantity.innerText) + parseInt(cardInfo.quantity)
        }
        card.querySelector('[data-counter]').innerText = '1'
        toggleCartStatus()
        calcPrice()
    }
})

function renderCartItem(prop, element) {
    let cartHtml =`
        <div class="cart-item" data-id=${prop.id}>
			<div class="cart-item__top">
				<div class="cart-item__img">
					<img src=${prop.imgSrc} alt="">
				</div>
				<div class="cart-item__desc">
					<div class="cart-item__title">${prop.title}</div>
					<div class="cart-item__weight">${prop.itemsInBox}. / ${prop.weight}.</div>
					<!-- cart-item__details -->
					<div class="cart-item__details">
						<div class="items items--small counter-wrapper">
							<div class="items__control" data-action="minus">-</div>
							<div class="items__current" data-counter="">${prop.quantity}</div>
							<div class="items__control" data-action="plus">+</div>
						</div>
						<div class="price">
							<div class="price__currency">${prop.price}</div>
						</div>
					</div>
					<!-- // cart-item__details -->
				</div>
			</div>
		</div>`
    element.insertAdjacentHTML('beforeend', cartHtml.trim())
}
