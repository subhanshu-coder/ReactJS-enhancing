function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
createRoot(document.getElementById('root')).render(
  <MyForm />
);

// Example:
// Use the useState Hook to manage the input:
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
    return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}
// createRoot(document.getElementById('root')).render(
//   <MyForm />
// );

// Submitting Forms
// You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:
// add a submit button and an event handler in the onSubmit attribute:

// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//   }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert(name);
  // }
//     return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <MyForm />
// );