import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
    const onAddValue = () =>{
        if(count >= 20 ){
           alert("you exceed maximum limit")
           return ;
        }
        setCount (count + 1);
    }
    const onDecValue = () =>{
        if(count <= 0){
            alert("you exceed minimum value")
            return;
        }
        setCount(count - 1);
    }
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-10'>
      <h1 className='text-2xl font-bold'>Counter {count} </h1>
      <button className='bg-blue-500 text-white px-3 py-1' onClick={onAddValue}>increment</button>
      <button className='bg-red-500 text-white px-3 py-1' onClick={onDecValue}>decrement</button>
    </div>
  )
}

export default Counter
