import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <List items={this.props.listItems} />
          <Input onAddToList={this.props.onCreateItem} />
        </main>
        <footer>
          &copy; 2016 Pickles of Awesome.
        </footer>
      </div>
    )
  }
}

export default App
