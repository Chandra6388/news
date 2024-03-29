import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
} 

// const Counter = () => {

//     const count = useSelector((state) => state.value)
//     const dispatch = useDispatch();
//     return (
//         <div>
//             <button onClick={() => dispatch(increment())}>+</button>
//             <p>counter : {count}</p>
//             <button onClick={() => dispatch(decrement())}>-</button>
//         </div>
//     );
// }

// export default Counter;
