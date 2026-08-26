function Car(props) {
  return (
    <h1>My car is a {props.brand}</h1>
  );
}

// you can use myobj instead of props in the component
function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

// send multiple properties to the car component
createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);