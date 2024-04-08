// import logo from './logo.svg';
// import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [ userData, setUserData ] = useState([])
  const [items, setItems] = useState([])

  const nameRef = useRef(null)
  const weightRef = useRef(null)
  const heightRef = useRef(null)

  useEffect(()=>{

    localStorage.setItem('items', JSON.stringify(userData))
  },[userData])

  useEffect(()=>{
    const item = JSON.parse(localStorage.getItem('items'))
    console.log('data retrieve from local storage ' , item)
    if(item){
      setItems(item)
    }
  },[userData])
  const calculateBMI = ()=>{
    console.log(nameRef.current.value)
    console.log(weightRef.current.value)
    console.log(heightRef.current.value)
   
    const name = nameRef.current.value
    const weight = parseFloat(weightRef.current.value)
    const height = parseFloat(heightRef.current.value)
    const bmi = weight/ (height * height)

    const newUserData = {
      'name' : name,
      'weight' : weight,
      'height' : height,
      'bmi' : bmi.toFixed(2)
    }
    setUserData([...userData, newUserData]);

    // setBmi(weight/(height*height))
    nameRef.current.value = ''
    weightRef.current.value = ''
    heightRef.current.value = ''
  }

  // const my_data = {
  //   'name' : naam,
  //   'weight' : weight,
  //   'height' : height
  // }

  return (
    <div className="App">
      <label style={{margin: '25px'}}>
        Enter your Name:
        <input type="text" ref={nameRef}/>
      </label><br/>
      <label style={{margin: '25px'}}>
        Enter Your weight in kg:
        <input type="number" ref={weightRef} />
      </label><br/>
      <label style={{margin: '25px'}}>
        Enter your height in metre:
        <input type="number" ref={heightRef}/>
      </label>

      <button type='submit' onClick={calculateBMI}>Submit</button>

      {/* {naam.map((data) => data)}
      {height.map((data) => data)}
      {weight.map((data) => data)} */}

      {/* {bmi} */}

      {/* {my_data.map(data => data)} */}

      {/* {userData.map((data, index) => {
        return(
        <div key={index}>
        <p>{data.name}</p>
        <p>{data.height}</p>
        <p>{data.weight}</p>
        <p>{data.bmi}</p>
        </div>
      )})} */}
      {
        items.map((data, index)=>{
          return(
            <div key={index}>
            <p>{data.name}</p>
            <p>{data.height}</p>
            <p>{data.weight}</p>
            <p>{data.bmi}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
