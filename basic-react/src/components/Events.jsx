// React events are written in camelCase syntax:

// onClick instead of onclick.

// React event handlers are written inside curly braces:

// onClick={shoot}  instead of onclick="shoot()".

// React:Get your own React.js Server
<button onClick={shoot}>Take the Shot!</button>

// HTML:
{/* <button onclick="shoot()">Take the Shot!</button> */}

// Put the shoot function inside the Football component:
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

   return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Football />
);