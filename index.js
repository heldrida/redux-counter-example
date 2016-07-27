import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import reducers from './reducers'

const store = createStore(reducers)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter store={store} />,
    rootEl
  )
}

render()
store.subscribe(render)
