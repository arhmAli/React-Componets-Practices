import React, { Component } from 'react'
import axios from "axios"
class Github extends Component {
    constructor(props){
        super(props);
        this.state={quote:""}
    }
    componentDidMount(){
        axios.get('https://icanhazdadjoke.com/',{headers:{Accept:'application/json'}} ).then(res=>{
        setTimeout(
            function(){
                this.setState({
                    quote:res.data
                });
            }.bind(this),3000
            );
            }
        );
    }
  render() {
    return (
      <div>
        <h1>Github says:</h1>
        <p>{this.state.quote}</p>
        </div>
    )
  }
}
export default Github;