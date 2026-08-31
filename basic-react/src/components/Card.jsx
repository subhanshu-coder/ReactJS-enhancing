import React from 'react'

function Card(props) {
  return (
    <div className="child">
      <img
        src="https://images.unsplash.com/photo-1752350434967-29fe9a749b37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
        alt="Holographic dome"
      />

      <h1>Prince Pal{props.user}</h1>
      <p>Just sense the human behaviour how they belong to dumb society</p>
      <button>Check the profile</button>
    </div>
  )
}

export default Card