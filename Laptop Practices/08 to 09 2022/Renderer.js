import React, { Component } from 'react'
import Render from './Render'

export default class Renderer extends Component {
    state = {
        active: true
    }
    render() {
        // const { active } = this.states
        return (
            <div>{this.state.active ? <Render /> : null}

                <button onClick={() => this.setState({ active: !this.state.active })} >Remove my child!</button >
            </div>
        )
    }
}
