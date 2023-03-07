import { useState } from 'react'


const Counter = () =>{
  const [count, setCount] = useState(1)

  const inc = () => {
    setCount(count + 1);
  };
  
  const dec = () => {
    setCount(count - 1);
  }
  const TotalPrice = () =>{
    var quantite = (document.getElementById("counter") as HTMLInputElement).value;
    var prix = (document.getElementById("price") as HTMLInputElement).value;
    var total = parseFloat(quantite)*parseFloat(prix);
    total = (document.getElementById("tot_Amount") as HTMLInputElement).value;
    console.log(total);
  };

 return (
    <div onLoad={TotalPrice}>
      <button disabled={count===1} onClick={dec}><i className="fa-sharp fa-solid fa-minus"></i></button>

      <input className='num' typeof="number"  value={count} name='counter' id='counter' onChange={TotalPrice}/>

      <button onClick={inc}><i className="fa-sharp fa-solid fa-plus"></i></button>
    </div>
  )
}

export default Counter;