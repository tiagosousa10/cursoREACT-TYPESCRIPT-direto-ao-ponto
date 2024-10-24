import {useState,useEffect} from 'react'

const Counter = () => {
const [count,setCount]= useState<number>(0)
useEffect(()=> {
    console.log(`o contador es´ta co o valor de ${count}`)
},[count])
  return (
    <div>      
        
        <p>{count}</p>
        <button  onClick={()=>  setCount((prevCount) => prevCount + 1)} >
            Incrementar
            </button>
        
         </div>
  )
}

export default Counter