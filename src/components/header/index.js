import React, { useContext, useRef, useEffect } from 'react'
import { diamond, purse, search } from '../../images/svgs'
import { CartContext } from '../../providers/Provider'

export const Header = () => {
    const cart = useContext(CartContext)
    const purseRef = useRef(null)
    const cartlistRef = useRef(null)

    useEffect(() => {
        if (cartlistRef.current && purseRef.current) {
            purseRef.current.addEventListener('mouseenter', () => {
                cartlistRef.current.classList.add('open')
            })
            purseRef.current.addEventListener('mouseleave', () => {
                cartlistRef.current.classList.remove('open')
            })
        }
    }, [])

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-left">
                    <p>Lotus</p>
                    <div className="diamond">{diamond}</div>
                </div>
                <div className="header-right">
                    <div className="search-icon">{search}</div>
                    <input className="search-input" type="text" placeholder="Search" />
                    <div className="purse" ref={purseRef} id="cart-icon">
                        {purse}
                        <p>{cart.length ? cart.length : null}</p>
                    </div>
                </div>
                <div className="cartlist" ref={cartlistRef}>
                    {cart.length > 0 ? (
                        cart.map((item, i) => {
                            return (
                                <div className="item-wrapper" key={`${item}__${i}`}>
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-entity">{item.entity}</div>
                                </div>
                            )
                        })
                    ) : (
                        <p className="no-item">Cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    )
}
