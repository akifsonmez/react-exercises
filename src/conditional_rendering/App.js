import React, { useState } from 'react'
import Hello from '../props_states_hooks/Hello'

const App = () => {
  const buttonOnClick = () => {
    setIsVisible(isVisible => !isVisible)
  }

  const [isVisible, setIsVisible] = useState(false)
  return (
        <>
            <h1>Conditional Rendering</h1>
            <button onClick={buttonOnClick}>Hide/Show</button>
            {isVisible && <Hello/>}
        </>
  )
}

export default App
