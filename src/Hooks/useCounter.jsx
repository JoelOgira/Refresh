import { useState } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState({
        count: 0
    });

    const increaseCounter = () => {
        setCounter({
            count: counter.count + 1
        });
    }

    const decreaseCounter = () => {
        setCounter({
            count: counter.count - 1
        });
    }

    const resetCounter = () => {
        setCounter({
            count: 0
        });
    }

    return { counter, increaseCounter, decreaseCounter, resetCounter }
}

export default useCounter;