import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:'center',textTransform:'uppercase'}}>CI/Cd Pipe Line</h1> 
      <p>Master Protected Branch</p>  
      <Counter />   
    </div>
  )
}

export default App
