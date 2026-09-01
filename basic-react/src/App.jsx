
import React from 'react'
import Card from './components/Card'

function App () {
  return (
    <div className = 'parent'>
      <Card user="prince pal" img="https://images.unsplash.com/photo-1776662958125-893f153f592a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="ro sharma" img="https://images.unsplash.com/photo-1752350434967-29fe9a749b37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="harsh patel" img="https://images.unsplash.com/photo-1766229298250-88f02fa015ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>

  );
}
export default App;