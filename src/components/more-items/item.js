import React, { useContext } from 'react'
import { AddToCartContext } from '../../providers/Provider'

export const Item = ({ item, index }) => {
    const { name, detail, price, src } = item
    const { addToCart } = useContext(AddToCartContext)

    const handleAdd = (imageId, wrapperId) => {
        const viewcart = document.getElementById('cart-icon')
        const imgtodrag = document.getElementById(wrapperId)
        const imgtodragImage = document.getElementById(imageId)

        const disLeft = imgtodrag.getBoundingClientRect().left
        const disTop = imgtodrag.getBoundingClientRect().top
        const cartleft = viewcart.getBoundingClientRect().left
        const carttop = viewcart.getBoundingClientRect().top
        const image = imgtodragImage.cloneNode()

        image.style =
            'z-index: 1111; width: 70px; height: 70px;opacity:0.8; position:fixed; top:' +
            disTop +
            'px;left:' +
            disLeft +
            'px;transition: left 2s, top 2s, width 2s, height 2s, opacity 2s cubic-bezier(1, 1, 1, 1)'
        const rechange = document.body.appendChild(image)
        setTimeout(() => {
            image.style.left = cartleft + 'px'
            image.style.top = carttop + 'px'
            image.style.width = '40px'
            image.style.height = '40px'
            image.style.opacity = '0'
        }, 200)
        setTimeout(() => {
            rechange.parentNode.removeChild(rechange)
            addToCart(item)
        }, 2000)
    }

    return (
        <div className="item-container" key={`${name}_${index}`}>
            <div className="item-price-container">
                <div className="item-price">
                    <p>{`$${price}`}</p>
                </div>
            </div>
            <div className="item-main-container">
                <div className="item-image-wrapper" id={`${name}_wrapper`}>
                    <img id={`${name}_${index}`} src={src} alt={name} width="100%" height="100%" />
                </div>
                <div className="item-detail">
                    <div className="item-detail-name">{name}</div>
                    <div className="item-detail-detail">{detail}</div>
                </div>
            </div>

            <div className="item-button-wrapper">
                <button onClick={() => handleAdd(`${name}_${index}`, `${name}_wrapper`)}>
                    <p>+</p>
                </button>
            </div>
        </div>
    )
}
