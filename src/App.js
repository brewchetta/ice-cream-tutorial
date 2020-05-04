import React, { Component } from 'react';
import './App.css';
import Menu from './Menu'

const url = 'http://localhost:3001/'

class App extends Component {
  // list all ice creams / cookies

  // TODO: checkboxes
  // process with forms
  // posting patching deleting
  // passing info b/w two endpoints
  // filtering state
  // bang operator

  // ice cream has sprinkles --> boolean
  // add products to a cart
  // toggle sprinkles

  state = {
    iceCreamIndex: [],
    cookiesIndex: []
  }

    // get patchedCookie
  cookiePatching = (patchedCookie) => {
    console.log('patchedCookie: ', patchedCookie)

    const alteredArray = this.state.cookiesIndex.map(cookie => {
      if (cookie.id === patchedCookie.id) {
        return patchedCookie
      } else {
        return cookie
      }
    })

    // update cookie in index with the patched cookie
    this.setState({cookiesIndex: alteredArray})
  }

  componentDidMount() {
    fetch(url + 'iceCreams')
    .then(res => res.json())
    .then(data => {
      this.setState({iceCreamIndex: data})
    })

    fetch(url + 'cookies')
    .then(res => res.json())
    .then(data => {
      this.setState({cookiesIndex: data})
    })
  }

  render() {
    console.log("cookies", this.state.cookiesIndex)
    return (
      <div className="App">

        <Menu iceCreams={this.state.iceCreamIndex}
        cookies={this.state.cookiesIndex}
        cookiePatching={this.cookiePatching} />

      </div>
    );
  }
}

export default App;
