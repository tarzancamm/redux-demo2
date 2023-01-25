import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

// Slice of global state
// 1. Identifier  2. Initial State  3. Reducers (receives current state and LOOKS AS IF IT'S MUTATING INITIAL STATE. In reality, Redux creates a copy of the initital state and mutates this copy. In Vanilla Redux we must NOT mutate the state but return an object that contains the entire new state. Redux Toolkit allows us to mutate the state copy.)
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// createSlice makes action identifiers for us that are the same name as our reducer methods (increment, decrement, etc.)
// Returns an action object: {type: 'some auto-generated unique identifier}
// counterSlice.actions.toggleCounter
export const counterActions = counterSlice.actions; // Name of reducer will be accessed in the component dispatch

export default counterSlice.reducer; // Store index will import this and can call it whatever it wants (counterReducer) because it is the default export
