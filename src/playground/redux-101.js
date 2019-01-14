import { createStore } from 'redux';

const incrementCount = ({ incrementBy  = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setTo = 0 } = {}) => ({
    type: 'SET',
    setTo
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return  {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.setTo
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 15 }));

store.dispatch(setCount({ setTo: 0}));

store.dispatch(setCount({ setTo: 1105}));

store.dispatch(setCount());