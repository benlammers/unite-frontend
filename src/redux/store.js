import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer'

const logger = createLogger({
   diff: true,
})

const middleware = process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
