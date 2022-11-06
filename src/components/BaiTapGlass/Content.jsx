import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        let { url, name, desc } = this.props;
        return (
            <div>
                <header>TRY GLASSES APP ONLINE</header>
                <div className="container">
                    <div className="row mt-3 align-items-center">
                        <div className="col-6 text-center">
                            <img src="./glassesImage/model.jpg" alt="..." width={300} height={350} />
                        </div>
                        <div id="model" className="col-6 text-center">
                            <img src="./glassesImage/model.jpg" alt="..." width={300} height={350} />
                            <img className="glasses" src={url} alt="..." />
                            <div className="Info px-2">
                                <h4 className="mb-1">{name}</h4>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
