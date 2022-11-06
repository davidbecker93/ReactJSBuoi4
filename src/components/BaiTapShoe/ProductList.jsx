import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3 className='text-center mb-5'>Shoes Store</h3>
                <div className="row">
                    <ProductItem />
                </div>
            </div>
        )
    }
}
