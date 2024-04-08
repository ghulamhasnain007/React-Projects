// App.js
import React from 'react';
import { useGlobalContext } from './context/AppContext';
import Child from './component/Child';

function App() {
  const { setUser, setShowUser } = useGlobalContext();

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <input type="text" placeholder="Name" name="name" onChange={handleSubmit} />
      <input type="email" placeholder="Email" name="email" onChange={handleSubmit} />
      <input type="text" placeholder="Contact" name="contact" onChange={handleSubmit} />
      <button onClick={() => setShowUser(true)}>SUBMIT</button>
      <Child />
    </div>
  );
}

export default App;
