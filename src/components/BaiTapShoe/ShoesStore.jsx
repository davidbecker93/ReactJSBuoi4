import React, { Component } from 'react'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
    render() {
        return (
            <div className='row w-100'>
                <div className="col-3">
                    <div className="mt-5 ml-4">
                        <p className='border border-primary rounded'>Home</p>
                        <p>Shop</p>
                    </div>
                </div>
                <div className="col-9">
                    <ProductList />
                </div>
            </div>
        )
    }
}
