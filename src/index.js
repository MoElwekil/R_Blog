import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './component/App'
import reducer from './reducers'

ReactDOM.render(<Provider store={createStore(reducer, applyMiddleware(thunk))}><App /></Provider>, document.getElementById('root'))