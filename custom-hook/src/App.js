import logo from './logo.svg';
import './App.css';
import DocumentTitleOne from './components/DocumentTitleOne';
import DocumentTitleTwo from './components/DocumentTitleTwo';
import { useLayoutEffect, useRef, useState } from 'react';
import About from './pages/About';

function App() {
  // const [count, setCount] = useState(0)

  // useLayoutEffect(()=>{
  //   handleClick()
  // },[])
  // function handleClick (){
  //   setCount((c)=> c + 1)
  // }
  const [width, setWidth ] = useState(0)
  const [height, setHeight ] = useState(0)
  const ref = useRef(null)

  useLayoutEffect(()=>{
    if(ref.current){
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }
  },[ref.current])
  return (
    <div>
      {/* <DocumentTitleOne />
      <DocumentTitleTwo/> */}
      {/* {count}<br/> */}
      {/* <button onClick={handleClick}>Increment</button> */}

      <div ref={ref}>
        <p>Width: {width}</p>
        <p>Height: {height}</p>

      </div>

      {/* <About/> */}
    </div>

  );
}

export default App;
