import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}





