import React from 'react'
import { Item } from './item'
import apple from '../../images/apple.png'
import banana from '../../images/banana.png'
import grape from '../../images/grape.png'

export const MoreItems = () => {
    const items = [
        {
            id: 1,
            name: 'Apple',
            detail: 'Original Taste',
            price: '7.00',
            src: apple,
            key: 'apple'
        },
        {
            id: 2,
            name: 'Banana',
            detail: 'Original Taste',
            price: '10.00',
            src: banana
        },
        {
            id: 3,
            name: 'Grape',
            detail: 'Original Taste',
            price: '9.13',
            src: grape
        }
    ]

    return (
        <div className="moreitems-wrapper">
            <div className="moreitems-header">More Items</div>
            <div className="moreitems-items">
                {items.map((item, i) => {
                    return <Item item={item} index={i} />
                })}
            </div>
        </div>
    )
}
