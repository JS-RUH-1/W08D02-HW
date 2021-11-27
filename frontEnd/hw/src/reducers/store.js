import {createStore, combineReducers} from 'redux'
import author from "./author/author"

const reducers = combineReducers({ author })
const store = createStore(reducers)

export default store
