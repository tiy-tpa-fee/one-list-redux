import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class App extends Component {

  constructor () {
    super()
    this.state = {
      listItems: [
      ]
    }
  }

  _addToList = (text) => {
    this.setState({
      listItems: [
        ...this.state.listItems,
        { text: text, complete: false }
      ]
    })
  }

  _completeItem = (index) => {
    const listItems = this.state.listItems.slice()
    listItems[index].complete = true
    this.setState({ listItems })
  }

  _removeItem = (index) => {
    this.setState({
      listItems: [
        ...this.state.listItems.slice(0, index),
        ...this.state.listItems.slice(index + 1)
      ]
    })
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <List
            items={this.state.listItems}
            onCompleteItem={this._completeItem}
            onRemoveItem={this._removeItem} />
          <Input onAddToList={this._addToList} />
        </main>
        <footer>
          &copy; 2016 Pickles of Awesome.
        </footer>
      </div>
    )
  }
}

export default App
