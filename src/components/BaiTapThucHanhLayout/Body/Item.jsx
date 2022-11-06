import React, { Component } from 'react'


export default class Item extends Component {
    render() {
        return (
            <div className="col-lg-4 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100 p-4">
                    <div className="card-body text-center p-lg-4 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
                        <h3 className="fs-4 fw-bold">Fresh new layout</h3>
                        <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>
            </div>

        )
    }
}
