import React, { Component } from 'react'
import loading from './Spinner-1s-64px.svg'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loading} alt="loading..." />
            </div>
        )
    }
}

export default Spinner
