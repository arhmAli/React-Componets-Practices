import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
        // this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (<div>
            <h1>FORM</h1>
            <form  >
                <input
                    id="name"
                    type='text'
                    name="name"
                    value={this.state.name}
                    placeholder='enter name'
                    onChange={this.onChange}
                />
                <button>Click Me</button>
            </form>
        </div>
        )
    }
}
export default Form;
