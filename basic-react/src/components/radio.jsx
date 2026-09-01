import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

    const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };
return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>