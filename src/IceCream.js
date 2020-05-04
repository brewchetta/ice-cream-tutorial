import React, { Component } from 'react'

class IceCream extends Component {
  render() {
    return(
      <div>

        <p>{this.props.iceCream.flavor}</p>
        <p>{this.props.iceCream.sprinkle ? "Yes" : "Nope"}</p>
        <p>{this.props.iceCream.price}</p>
        Sprinkles: <input type="checkbox" checked={this.props.iceCream.sprinkles ? true : null} />

      </div>
    )
  }
}

export default IceCream
