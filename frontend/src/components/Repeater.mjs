import React, { Component } from 'react'

export class Repeater extends Component {
  render() {
    return (
      <>
        {
          this.props.items.map(this.props.render, this.props.thisArg)
        }
      </>
    )
  }
}
