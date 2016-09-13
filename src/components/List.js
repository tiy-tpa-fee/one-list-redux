import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  render () {
    const items = this.props.listItems.map((item, index) => {
      return <Item
        text={item.text}
        complete={item.complete}
        index={index}
        key={index}
        {...this.props} />
    })
    return <ul>
      {items}
    </ul>
  }
}
export default List
