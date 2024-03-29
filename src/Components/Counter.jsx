import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

function Counter() {

  const [amount,setAmount] = useState("")

  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()

  const handleIncrement=() =>{
    if(amount == ''){
      alert("Please provide value")
    }else{
      // Update state in store
      dispatch(incrementByAmount(Number(amount)))
    }
  }
  return (
    <div style={{height:"70vh"}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className="d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column">
            <h1 style={{fontSize:"100px"}}>{count}</h1>
            <div className="w-100 d-flex justify-content-between mt-5">
                <button className='btn btn-danger' onClick={()=>dispatch(increment())}>Increment</button>
                <button className='btn btn-success' onClick={()=>dispatch(decrement())}>Decrement</button>
                <button className='btn btn-primary' onClick={()=>dispatch(reset())}>Reset</button>
            </div>
            
            <div className="d-flex mt-5">
              <input type="text" className='form-control' placeholder='enter amount to be incremented' onChange={e=>setAmount(e.target.value)} />
              <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment Amount</button>
            </div>
        </div>
    </div>
  )
}

export default Counter