import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        const { productsData, showProduct } = this.props;
        return (
            <div>
                <h3 className='text-center mb-5'>Shoes Store</h3>
                <div className="row">
                    {
                        productsData.map((item, index) => {
                            return <div className="col-md-4 mb-4" key={index}>
                                <ProductItem prod={item} showProduct={showProduct} />
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
