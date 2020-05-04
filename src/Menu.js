import React, { Component } from 'react'
import IceCream from './IceCream'
import Cookie from './Cookie'

class Menu extends Component {
  render() {
    return(
      <div>

        <h1>Menu</h1>

      {/*  <h1>Ice Creams</h1>
        {this.props.iceCreams.map(iceCream => <IceCream key={iceCream.id} iceCream={iceCream} handleToggle={this.props.handleToggle} />)} */}

        <h1>Cookies</h1>
        {this.props.cookies.map(cookie => (<Cookie
          key={cookie.id}
          cookie={cookie}
          handleToggle={this.props.handleToggle}
          cookiePatching={this.props.cookiePatching} />))}

      </div>
    )
  }
}

export default Menu
