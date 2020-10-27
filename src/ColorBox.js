import React, { Component } from 'react';
// import App from './App'

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    if(this.props.opacity > 0.2){
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity = {this.props.opacity - 0.1}/>
      </div>
    )} else {
      return null
    }
  }



}

// export default class ColorBox extends Component {
  
//   render() {
//     return (
//       <div className="color-box" style={{opacity: this.props.opacity}}>
//         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
//       </div>
//     )
//   }
  
// }
