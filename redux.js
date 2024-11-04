// Reducers in Redux
// It is pure function that take previous state & an action , and returns the next state
(previousState, action) => newState

// how to set initial state in redux
// pass initial state as second argument to createStore
const rootReducer = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
  });
  
  const initialState = {
    todos: [{id:123, name:'sudheer', completed: false}]
  };
  
  const store = createStore(
    rootReducer,
    initialState
);

// Redux Selector
// Selectors are functions that take Redux state as an argument and return some data to pass to the component
const getUserData = state => state.user.data;

// To access speciic data from react-redux store
// import useSelector from 'react-redux'
const firstName = useSelector(state => state.userFirstName)

// Actions in redux =>
// Actions are plain js objects or payloads of info that send data from app to store.
// Actions must have type property that indicates the type of action being performed.
// {
//     type: ADD_TODO,
//     text: 'Add todo item'
// }