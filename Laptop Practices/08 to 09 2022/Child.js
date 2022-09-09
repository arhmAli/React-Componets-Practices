import React, { Component } from 'react'
import './Parent.css'
class Child extends Component {
    state = {
        active: "active"
    }
    handleClick = () => {
        const value = this.state.active === 'active' ? this.setState({ active: 'not-active' }) : this.setState({ active: 'active' })
        this.setState({
            active: value
        })
    }
    render() {
        const { Qoute } = this.props;
        const { active } = this.state;

        return (
            <>
                <h1 className={active} onClick={this.handleClick}>IN CHILD COMPONENT!!!</h1>
                {Qoute}
            </>
        )
    }
}
export default Child