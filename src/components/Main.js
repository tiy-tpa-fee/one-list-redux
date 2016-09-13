import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class Main extends Component {

  render () {
    return (
      <div className='one-list'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <List {...this.props} />
          <Input onAddToList={this.props.createItem} />
        </main>
        <footer>
          &copy; 2016 Pickles of Awesome.
        </footer>
      </div>
    )
  }
}

export default Main
