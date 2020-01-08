import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../MainReducer.js'
import thunk from 'redux-thunk'

/*Create a function called configureStore */

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}
