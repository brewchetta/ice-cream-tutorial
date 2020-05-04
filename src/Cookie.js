import React, { Component } from 'react'

class Cookie extends Component {

  state = {
    sprinkled: this.props.cookie.sprinkles
  }

  handleChange = () => {
    this.setState({sprinkled: !this.state.sprinkled}, this.patchCookies)
  }

  patchCookies = () => {
    fetch(`http://localhost:3001/cookies/${this.props.cookie.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({sprinkles: this.state.sprinkled})
    })
    .then(res => res.json())
    .then(cookie => {
      this.props.cookiePatching(cookie)
    })
  }

  render() {
    return(
      <div>

        <p>{this.props.cookie.flavor}</p>
        <p>{this.props.cookie.price}</p>
        <p>{this.props.cookie.sprinkles ? "Yes" : "Nope"}</p>
        Sprinkles: <input
          type="checkbox"
          checked={this.state.sprinkled}
          onChange={this.handleChange} />

      </div>
    )
  }
}

export default Cookie
