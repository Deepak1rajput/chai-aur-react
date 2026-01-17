import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const addValue = () =>{
    if(count>=20){
      alert("You have reached the maximum limit");
      return;
    }
    setCount(count+1);
  }
  const removeValue = () =>{
    if(count<=0){
      alert("You have reached the minimum limit");
      return;
    }
    setCount(count-1);
  }
  return (
  <>
    <h1>Counter App {count}</h1>
    <button onClick={addValue}>increment</button>
    <button onClick={removeValue}>decrement</button>
  </>
  );
}

export default App;
