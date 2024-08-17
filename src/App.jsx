import { useState } from 'react';
import './App.css';


function App() {

  const [num,setnum]=useState('');

  function handel(){
    let inputVal=Number(document.querySelector('.inputField').value);
    if(inputVal < 0){
      setnum("enter a positive value");
     }else if(inputVal===0){
      setnum(" ")
     }else{
      setnum(`${inputVal+2},${inputVal+4},${inputVal+6}`);
     }
  }
  

  
 
  return (
    <div>
      <input type="number" className='inputField' onChange={handel}/>
      <p>{num}</p>
    </div>
  );
}

export default App;
