import { useState } from 'react'
import StepEditor from './components/StepEditor'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Step Editor Demo</h1>
        <StepEditor />
      </div>
    </div>
  )
}

export default App
