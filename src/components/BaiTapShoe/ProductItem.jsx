import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card">
                    <img src="https://picsum.photos/200/200" alt="" />
                    <div className="card-body">
                        <h4>Tên giày</h4>
                        <p>$415</p>
                        <button className='btn btn-dark'>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
