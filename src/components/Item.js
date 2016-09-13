import React, { Component } from 'react'

class Item extends Component {

  static propTypes = {
    index: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    complete: React.PropTypes.bool,
    onCompleteItem: React.PropTypes.func.isRequired,
    onRemoveItem: React.PropTypes.func.isRequired
  }

  doubleClicking = false

  clickHandler = () => {
    setTimeout(() => {
      if (!this.doubleClicking) {
        this.props.onCompleteItem(this.props.index)
      }
    }, 200)
  }

  doubleClickHandler = () => {
    this.doubleClicking = true
    this.props.onRemoveItem(this.props.index)
  }

  render () {
    return <li
      className={this.props.complete ? 'completed' : ''}
      onClick={this.clickHandler}
      onDoubleClick={this.doubleClickHandler}>
      {this.props.text}
    </li>
  }
}

export default Item
