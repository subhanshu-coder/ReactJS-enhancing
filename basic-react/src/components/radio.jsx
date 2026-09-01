import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };