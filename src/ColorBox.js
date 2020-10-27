import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render(props) {
    const newOp = (this.props.opacity - 0.1)
    return (
    (newOp - 0.1) >= 0.2 ? 
      <div className="color-box" style={{opacity: (newOp)}}>
        <ColorBox opacity={(newOp - 0.1)}/>
      </div> :
      null
    )
  }

}

