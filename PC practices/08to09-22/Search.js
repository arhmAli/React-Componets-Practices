import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={newname:''}
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.changeName(this.state)
        
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label htmlFor='theName'>Enter a Name</label>
      <input 
      id='theName'
      type='text'
      name='newname'
      placeholder='Enter a name'
      value={this.state.newname}
      onChange={this.handleChange}
      /> 
      <button>Search</button> 
      </form>
    )
  }
}
