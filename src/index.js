import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './styles/screen.sass'
import store from './store'

const render = () => {
  ReactDOM.render(
    <App
      listItems={store.getState()}
      onCreateItem={(text) => {
        store.dispatch({
          type: 'ITEM_CREATE',
          item: { text }
        })
      }}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
