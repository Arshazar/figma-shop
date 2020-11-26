import React from 'react'
import { Item } from './item'

export const BestSellers = () => {
    const items = [
        {
            id: 4,
            name: 'Lotus Jar',
            detail: 'Green Fruit Jelly',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            price: '4.00'
        },
        {
            id: 5,
            name: 'Lotus Mini',
            detail: 'Green Fruit Jelly',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            price: '2.00'
        }
    ]
    return (
        <div className="bestsellers-wrapper">
            <div className="bestsellers-header">
                <div className="bestsellers-header-title">Best Sellers</div>
                <div className="circle">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="bestsellers-items">
                {items.map((item, i) => {
                    return <Item item={item} index={i} />
                })}
            </div>
        </div>
    )
}
