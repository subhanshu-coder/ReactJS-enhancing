
import React from 'react'
import Card from './components/Card'

function App () {
  return (
    <div className = 'parent'>
      <Card />
      <Card user="sarthak sharma"/>
      <Card user="harsh patel"/>
    </div>

  );
}
export default App;