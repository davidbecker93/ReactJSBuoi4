import React, { Component } from 'react'

export default class Glasses extends Component {
    render() {
        let { data, glassClick } = this.props;
        return <img src={data.url} width={150} alt="..." onClick={() => {
            glassClick(data)
        }} />
    }
}
