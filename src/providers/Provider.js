import React, { useState, createContext } from 'react'

export const CartContext = createContext(undefined)
export const AddToCartContext = createContext(undefined)

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (p) => {
        if (cart.length > 0) {
            const exceptionCart = cart.filter((product) => {
                if (p.id !== product.id) {
                    return product
                }
            })
            // let newCart = cart.filter((product) => {
            //     if (p.id === product.id) {
            //         return {
            //             ...product,
            //             entity: product.entity ? product.entity + 1 : 1
            //         }
            //     }
            // })
            // newCart = newCart.length > 0 ? newCart : [p]
            // setCart([...exceptionCart, ...newCart])
            let newAddedtoPrev = cart.filter((el) => {
                if (p.id === el.id) {
                    let newEl = el
                    newEl.entity = el.entity + 1
                    return newEl
                }
            })
            newAddedtoPrev = newAddedtoPrev.length > 0 ? newAddedtoPrev : [{ ...p, entity: 1 }]
            setCart([...exceptionCart, ...newAddedtoPrev])
        } else {
            setCart([{ ...p, entity: 1 }])
        }
    }

    return (
        <CartContext.Provider value={cart}>
            <AddToCartContext.Provider value={{ addToCart }}>
                {props.children}
            </AddToCartContext.Provider>
        </CartContext.Provider>
    )
}

export const ContextsProvider = (props) => (
    <CartContextProvider>{props.children}</CartContextProvider>
)
