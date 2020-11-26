import React, { useContext } from 'react'
import { AddToCartContext } from '../../providers/Provider'

export const Item = ({ item, index }) => {
    const { name, detail, description, price } = item
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
            'z-index: 1111; width: 200px; height: 200px;opacity:0.8; position:fixed; top:' +
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
            <div className="item-image-wrapper" id={`${name}_wrapper`}>
                <img
                    id={`${name}_${index}`}
                    src={require('../../images/jar.png')}
                    alt={name}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="item-desc-wrapper">
                <div className="item-desc-header">
                    <div className="item-desc-header-header">{name}</div>
                    <div className="item-desc-header-detail">{detail}</div>
                </div>
                <div className="item-desc-description">{description}</div>
                <div className="item-desc-footer">
                    <div className="item-desc-footer-price">{`${price} $`}</div>
                    <div className="item-desc-footer-add">
                        <button onClick={() => handleAdd(`${name}_${index}`, `${name}_wrapper`)}>
                            <p>+</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
