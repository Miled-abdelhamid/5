import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    // component did mount && component wiilmount
    useEffect(() => {
        console.log("component did mount")
        return () => {
            console.log("component wiil unmount")
        }
    }, [])

    // component did update
    useEffect(() => {
        console.log('component did update')
    })

    return (
        <div>
            <button onClick={() => setCount(count +1)}>+</button>
            <h2>{count}</h2>
            <button onClick={() => count > 0 && setCount(count -1)}>-</button>
        </div>
    )
}

export default Counter
