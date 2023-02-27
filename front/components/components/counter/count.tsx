import { useState } from 'react'


const Counter = () =>{
  const [count, setCount] = useState(1)

  const inc = () => {
    setCount(count + 1);
  };
  
  const dec = () => {
    setCount(count - 1);
  }
 return (
    <div>
      <button disabled={count===1} onClick={dec}><i className="fa-sharp fa-solid fa-minus"></i></button>

      <input className='num' type="number" value={count} />

      <button onClick={inc}><i className="fa-sharp fa-solid fa-plus"></i></button>
    </div>
  )
}
export default Counter;