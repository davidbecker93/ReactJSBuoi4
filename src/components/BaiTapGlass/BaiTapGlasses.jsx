import React, { Component } from 'react';
import dataG from '../../assets/data/dataGlasses.json';
import Glasses from './Glasses';
import Content from './Content';

export default class BaiTapGlasses extends Component {

    renderGlass = () => {
        return dataG.map((data, index) => {
            return <div className='col-2' key={index}>
                <Glasses data={data} glassClick={this.glassClick} />
            </div>
        })
    }

    state = {
        data: {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./glassesImage/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    }

    glassClick = (data) => {
        this.setState({
            data: data
        })
    }

    render() {
        let { url, name, desc } = this.state.data;
        return (
            <div className='bg-glass'>
                <div className="bg-overlay">
                    <Content url={url} name={name} desc={desc} />
                    <div className="container">
                        <div className="mt-4 bg-item p-5">
                            <div className="row">
                                {this.renderGlass()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
