const redux = require('redux')
const createStore = redux.createStore
const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload
      }
  }
  return state
}

// store
const store = createStore(rootReducer)
console.log('store state::', store.getState())

// subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

// dispatching actions
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', payload: 10})

console.log('store state::', store.getState())
