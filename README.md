# ReactJS-enhancing
React component
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
-- Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
-- When creating a React component, the component's name MUST start with an upper case letter.

React components returns HTML code.

react props
Props
Arguments can be passed into a component as props, which stands for properties.

You send the arguments into the component as HTML attributes.

You will learn more about props in our React Props chapter.

Components in Files
React is all about re-using code, and it can be a good idea to split your components into separate files. 

To do that, create a new file in the src folder with a .jsx file extension and put the code inside it

Create a Class Component
When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

ExampleGet your own React.js Server
Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

Now your React application has a component called Car, which returns a <h2> element.

To use this component in your application, use similar syntax as normal HTML: <Car />

React Props
React Props are like function arguments in JavaScript and attributes in HTML.
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

To send props into a component, use the same syntax as HTML attributes:

ExampleGet your own React.js Server
Add a brand attribute to the Car element:

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);

The component receives the argument as a props object:

Example
Use the brand attribute in the Car component:

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

The name of the object is props, but you can call it anything you want.

Pass Multiple Properties
You can send as many properties as you want.

Every attribute is sent to the Car component as object properties.

Different Data Types
React props can be of any data type, including variables, numbers, strings, objects, arrays, and more.

Strings can be sent inside quotes as in the examples above, but numbers, variables, and objects need to be sent inside curly brackets.

Object Props
The component treats objects like objects, and you can use the dot notation to access the properties.

Array Props
Array props can be accessed using the indexes.

Pass Props from Component to Component
Attributes are also how you pass data from one component to another, as parameters.

Destructuring Props
You can limit the properties a component receives by using destructuring.
You can also destruct the properties you need inside the component.

This way, the component receives all the properties, but the destructuring makes sure it only uses the ones it needs.

Destructuring ...rest
When you don't know how many properties you will receive, you can use the ...rest operator.

Meaning: you can specify the properties you need, and the rest will be stored in an object.

Default Values
With Destructuring, you can set default values for props.

If a property has no value, the default value will be used.