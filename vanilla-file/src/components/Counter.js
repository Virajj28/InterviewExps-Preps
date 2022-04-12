import { useState } from "react"

const Counter = () => {
    const [count, setCount]= useState(0);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return (
        <>
            <button onClick={increment} className="border-2 border-red-400">+</button>
            {count}
            <button onClick={decrement} className="border-2 border-red-400">-</button>
        </>
    )
}

export default Counter;