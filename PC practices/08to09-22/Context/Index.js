import React, { Component } from 'react'

const myContext =React.createContext();
class Index extends Component {
    state={
        user:[{
            name:"ali",
            id:1
        }
        ,{
            name:"arham" ,
            id:2
        }    
    ]
    }

  render() {
    return (
        <>
        <myContext.Provider value={{user:this.state.user}}>
            {this.props.children}
        </myContext.Provider>
        </>
    )
  }
}
export {myContext,Index}
