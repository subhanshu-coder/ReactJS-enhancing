function Car(props) {
  return (
  
    <h1>My car is a {props.brand}</h1>
    
  );
}
// export default Car

// // you can use myobj instead of props in the component
function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

// // send multiple properties to the car component
createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);

// // use the property values in the car component
function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

// // variables has to be sent inside curly brackets
// // let x = "Ford";

createRoot(document.getElementById('root')).render(
  <Car brand={x} />
);

// // Objects and Arrays has to be sent inside curly brackets:
let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);

// // Use the dot notation to access object properties:
function Car(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

// createRoot(document.getElementById('root')).render(
//   <Car carinfo={carInfo} />
// );

// // Use the indexes to access array properties:

// function Car(props) {
//   return (
//     <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
//   );
// }

// const carInfoArray = ["Ford", "Mustang"];

// createRoot(document.getElementById('root')).render(
//   <Car carinfo={carInfoArray} />
// );
import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div className= "student">
     <p>{props.name}</p>
     <p>{props.age}</p>
     <p>student: {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}
Student.propTypes ={
  name:PropTypes.string
}
export default Student