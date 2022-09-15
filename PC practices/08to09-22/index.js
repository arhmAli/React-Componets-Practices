import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';
import ColorChange from './Components/ColorChange';
import ContextOne from './Components/ContextOne';
import './Index.scss'


class App extends Component {
//   state={
//     colors:["red","purple","grey","orange","violet","indigo","yellow","pink","Gold","Green","Aqua","Lime"]
// }
  render() {
    return (
      <div className='main'>
        <h1>Color Changing App</h1>
      <div>
      {/* {this.state.colors.map(color=>(
        
        <ColorChange style={{backgroundColor:color}} colors={color}
        />
      ))} */}
      </div>
      {/* <ColorChange/>   */}
      <ContextOne/>
      </div>
    )
  }
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);