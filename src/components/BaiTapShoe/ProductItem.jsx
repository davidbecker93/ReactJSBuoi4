import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { prod, showProduct } = this.props;
        return (
            <div className="card">
                <img src={prod.image} alt="" />
                <div className="card-body">
                    <h5>{prod.name}</h5>
                    <p>${prod.price}</p>
                    <button className='btn btn-dark' data-toggle="modal" data-target="#exampleModal" onClick={() => { showProduct(prod) }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
