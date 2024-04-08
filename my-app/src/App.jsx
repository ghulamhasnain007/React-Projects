// import logo from './logo.svg';
import './App.css';
import React , { useRef, useState } from 'react';
// import Child from './pages/Child';
import MainInput from './components/Input';
import useWindowSize from './hook/useWindowSize';

function App() {
  // const [count, setCount] = useState(0)
  const { dimensions } = useWindowSize();
  // console.log("PARENT RERANDER")
  const emailRef = useRef(null)
  // const handleSubmit = () => {
  //   const { current } = emailRef
  //   console.log("DATA", current.value)
  // }

  const handleClick = () =>{
    emailRef.current.greetFromChild()
  }
  console.log(dimensions)
  return (
    <div className="App">
      <h1>Home</h1>
      {/* <input type="text" ref={emailRef} />
      <button onClick={handleSubmit}>SUBMIT</button> */}
      {/* <Child/> */}
      <MainInput ref={emailRef} placeholder="Enter Name" type="text"/>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
