import useCounter from "../../Hooks/useCounter";

const Count = () => {

    const { counter, increaseCounter, decreaseCounter, resetCounter } = useCounter();

    return (
        <div className='container overflow-y-auto grow mx-auto md:w-3/4'>
            <div className="flex flex-row justify-between space-x-6">
                <div>
                    {counter.count}
                </div>
                <div>
                    <button
                        onClick={increaseCounter}
                    >
                        increase
                    </button>
                </div>
                <div>
                    <button
                        onClick={decreaseCounter}
                    >
                        decrease
                    </button>
                </div>
                <div>
                    <button
                        onClick={resetCounter}
                    >
                        reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Count;