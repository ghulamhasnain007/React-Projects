// Child.js
import React from 'react';
import { useGlobalContext } from '../context/AppContext';

function Child() {
  const { user, showUser } = useGlobalContext();

  if (!showUser) return <p>Enter Data</p>;

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Contact: {user.contact}</p>
    </div>
  );
}

export default Child;
