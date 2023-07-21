const products = [{
    id: 1,
    name: 'Galexy S21fe',
    price: 18000,
    image: './images/s21.png'
}, {
    id: 2,
    name: 'Galexy A14',
    price: 5000,
    image: './images/a14.png'
}, {
    id: 3,
    name: 'Galexy A73',
    price: 15000,
    image: './images/a73.png'
}]

const cart = {
    items: [],
    total: 0
}

const renderProductInDom = () => {
    const productDiv = document.querySelector('.products')
    productDiv.innerHTML = ''

    products.forEach((item, index) => {
        productDiv.innerHTML +=
            `
            <div class="product flex-center">
                <div class="product-image">
                    <img src="${item.image}" alt="product">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <span class="product-price">${item.price}</span>
                <button class="btn" onClick="addProductToCart(${index})">افزودن به سبد خرید</button>
            </div>
        `
    })
}


const renderCartItem = () => {
    const cartDiv = document.querySelector('.carts')
    cartDiv.innerHTML = ''

    let totalPrice = 0

    if (cart.items.length === 0) {
        cartDiv.innerHTML = 'محصولی در سبد خرید وجود ندارد'
    }

    cart.items.forEach((item, index) => {
        totalPrice += item.price
        cartDiv.innerHTML +=
            `
            <div class="cart">
            <div class="item-image">
                <img src="${item.image}" alt="cart-image">
            </div>
            <div class="item-quantity">
                ${item.quantity}
            </div>
            <button class="item-remove" onClick="removeProduucts(${index})">حذف</button>
    
        </div>
            `
    })
    document.querySelector('.cart-total').innerHTML = `مجموع قیمت سبد خرید  ${totalPrice}  تومان`
}

const addProductToCart = (index) => {
    const findProduct = cart.items.findIndex((item) => {
        return item.name === products[index].name
    })

    if (findProduct === -1) {
        cart.items.push({
            name: products[index].name,
            price: products[index].price,
            image: products[index].image,
            quantity: 1
        })
    }
    else {
        const product = cart.items[findProduct]
        product.price *= 2
        product.quantity += 1
    }

    renderCartItem()

}

const removeProduucts = (index) => {
    cart.items.splice(index, 1)
    renderCartItem()
}

renderProductInDom()
renderCartItem()