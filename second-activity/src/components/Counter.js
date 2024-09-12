import '../components/Counter.css';
import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                You clicked {count} times
            </h1>

            <button onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>

            <button onClick={() => setCount(prev => prev - 1)}>
                Decrement
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export default Counter;