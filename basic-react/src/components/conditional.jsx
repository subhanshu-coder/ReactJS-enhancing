// In React, you can conditionally render components.

// There are several ways to do this.
// Example:
// Now, we'll create another component that chooses which component to render based on a condition:

function Goal(props) {
  const isGoal = props.isGoal;
   if (isGoal) {
    return <MadeGoal/>;
  }
    return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);

// Try changing the isGoal attribute to true:
// Example:
createRoot(document.getElementById('root')).render(
  <Goal isGoal={true} />
);

// Logical && Operator
// Another way to conditionally render a React component is by using the && operator.

// In the example below, the heading will only be rendered if the props.brand property is not empty:

function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);

// If props.brand evaluates to true, the expression after && will render.

// Try emptying the brand property:

// Example:
createRoot(document.getElementById('root')).render(
  <Car />
);

// Ternary Operator
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);

// 
// function Glass() {
//     return (
//         <>
//             {5 > 2 && <h2>Hello</h2> }
//         </>
//     );
// }

// function Glass() {
//     return (
//         <>
//             {/* {5 > 2  &&} <h2>Hello</h2> */}
//         </>
//     );
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return (
//     <>
//       { isGoal ? <MadeGoal/> : <MissedGoal/> }
//     </>
//   );
// }

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);