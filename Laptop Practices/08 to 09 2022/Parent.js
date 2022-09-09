import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {
    state = {
        Qoute: "There are no accidents!"
    }
    render() {
        const { Qoute } = this.state;
        return (
            <>
                <Child Qoute={Qoute} />
            </>
        )
    }
}
export default Parent