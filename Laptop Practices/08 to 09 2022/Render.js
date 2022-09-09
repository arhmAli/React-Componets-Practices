import React, { Component } from 'react'

export default class Render extends Component {
    constructor(props) {
        super(props);
        this.state = { something: true }
        console.log('Inside the constructor')

    }
    componentDidMount() {
        console.log("inside component did mount")
    }
    componentWillUnmount() {
        console.log("YOU REMOVED SOMETHING :(")
    }
    render() {
        console.log("inside the render")
        return (
            <div> <h1>Rendered the Child component using lifecycle!</h1></div>
        )
    }
}
