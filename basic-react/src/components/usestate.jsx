import { useState } from "react";


function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
)

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
            <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);