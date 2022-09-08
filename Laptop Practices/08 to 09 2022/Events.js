import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        alert("someone Clicked!")
        this.setState({ value: e.target.value })
        console.log(this.state.value)
    }
    render() {
        return (
            <div>
                <h1>Type Something</h1>
                <input
                    type='text'
                    placeholder='Type'
                    value={this.state.value}
                    onChange={this.handleClick}></input>
                <button >Click me</button>
            </div>
        )
    }
}
