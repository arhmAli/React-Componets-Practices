import React, { Component } from 'react'
import './ColorChange.scss'
export default class ColorChange extends Component {
    constructor(props){
        super(props)
        this.state={
            
    colors:["red","purple","grey","orange","violet","indigo","yellow","pink","Gold","Green","Aqua","Lime"],
            realColor:[]
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        let randIdx=this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        this.setState({
            realColor:randIdx
            
        })
        console.log(randIdx)
        
    }
  render() {
    return (
    <>
    <div className='main-container' style={{backgroundColor:this.state.realColor,
                width:300,
                height:300}}>
                    
    <button className='btn' onClick={this.handleClick}>Change Color!</button>
    </div>
    </>
        )
  }
}
