import Button from '../components/Button'
import { useReducer } from 'react';
import Panel from '../components/Penal';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'set-value-to-add'
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add-value-to-count'
const SET_VALUE_TO_ZERO = 'set-value-to-zero'

const reducer = (state, action) => {

    switch(action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };

        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }

        case DECREMENT_COUNT:
            
            return {
                ...state,
                count: state.count - 1
        };

        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            };

        default:
            return state;
    }
};

function CounterPage ({initialCount}) {

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setvalueToAdd] = useState();
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

        const increment = () => {
            dispatch({
                type: INCREMENT_COUNT,
            });
        };
        const decrement = () => {
            dispatch({
                type: DECREMENT_COUNT,
            })
        }

        const handleChange = (event) => {
            const value = parseInt(event.target.value) || 0;

            dispatch({
                type: SET_VALUE_TO_ADD,
                payload: value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            dispatch({
                type: ADD_VALUE_TO_COUNT
            })
        }

    
    return <Panel classNames="m-3">
        <h1 className='text-lg'>Count is {state.count}</h1>

        <div className='flex flex-row'>
        <Button onClick={increment}>
            Increment
        </Button>

        <Button onClick={decrement}>
            Decrement
        </Button>

        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input type="number" value={state.valueToAdd || ""} onChange={handleChange} className='p-1 m-3 bg-gray-50 border border-gray-300' />
            <Button>Add it</Button>
        </form>
    </Panel>
}

export default CounterPage;