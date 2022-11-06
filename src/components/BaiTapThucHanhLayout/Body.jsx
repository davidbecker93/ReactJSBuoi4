import React, { Component } from 'react'
import Banner from './Body/Banner'
import Item from './Body/Item'

export default class Body extends Component {
    render() {
        return (
            <div className="py-5">
                <Banner />
                <div className="container pt-4 px-lg-5">
                    <div className="row gx-lg-5">
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        )
    }
}
