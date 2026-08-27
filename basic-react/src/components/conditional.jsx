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
