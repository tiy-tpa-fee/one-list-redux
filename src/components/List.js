import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    onCompleteItem: React.PropTypes.func.isRequired,
    onRemoveItem: React.PropTypes.func.isRequired
  }

  render () {
    const items = this.props.items.map((item, index) => {
      return <Item
        text={item.text}
        complete={item.complete}
        onCompleteItem={this.props.onCompleteItem}
        onRemoveItem={this.props.onRemoveItem}
        index={index}
        key={index} />
    })
    return <ul className='one-list'>
      {items}
    </ul>
  }
}
export default List
