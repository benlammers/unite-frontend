import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer'

const logger = createLogger({
   diff: true,
})

const middleware = [thunk, logger]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
