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