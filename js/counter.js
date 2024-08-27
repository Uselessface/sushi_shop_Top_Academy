window.addEventListener('click', function (event){
    let current;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');
        current = counterWrapper.querySelector('.items__current');
    }
    if (event.target.dataset.action === 'plus'){
        current.innerText = ++current.innerText
    }
    if (event.target.dataset.action === 'minus') {
        if (event.target.closest('.cart-wrapper') && parseInt(current.innerText) === 1){
            const item = event.target.closest('.cart-item')
            item.remove()
        }
        else if (parseInt(current.innerText) > 1) {
            current.innerText = --current.innerText
        }
        calcPrice()
        toggleCartStatus()
    }
    if (event.target.closest('.cart-wrapper') && event.target.hasAttribute('data-action')){
        calcPrice()
    }


})