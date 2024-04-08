import React from 'react'
import Interceptor from '../interceptors/Interceptor'

function FetchUserData() {
  const fetchTodo = async() => {
    try {
        const response = await Interceptor.get('/todos/1');
        console.log(response)
    } catch (error) {
        console.error('An error occurred:', error.message);
        // Here, you might handle errors coming from the backend
    }
}
return (
    <div>
        <h1>Todos Fetched</h1>
        <button onClick={() => fetchTodo()}>FETCH</button>
    </div>
)
}

export default FetchUserData