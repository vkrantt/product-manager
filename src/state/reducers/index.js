import { combineReducers } from 'redux'
import reducer from './reducer'

const reducers = combineReducers({
    productState: reducer
})

export default reducers;