import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
import products from '../../assets/data/dataShoes.json'

export default class ShoesStore extends Component {
    state = {
        productDetail: {
            id: 4,
            name: "Adidas Super Star Red",
            price: 465,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            quantity: 542,
            image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        }
    }

    showProduct = (products) => {
        this.setState({
            productDetail: products
        })
    }

    render() {
        return (
            <div className='row w-100'>
                <div className="col-md-3">
                    <div className="mt-5 ml-4">
                        <p>Home</p>
                        <p className='border border-primary rounded'>Shop</p>
                    </div>
                </div>
                <div className="col-md-9">
                    <ProductList productsData={products} showProduct={this.showProduct} />
                </div>
                <Modal content={this.state.productDetail} />
            </div>
        )
    }
}
