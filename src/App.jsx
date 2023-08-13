import { useState } from 'react'
import useToggle from './hooks/useToggle'

function App() {
  const { state, toggle } = useToggle()
  const { state: showData, toggle: toggleData } = useToggle()
  return (
    <>
      <div>
        <button onClick={toggle}>
          {state ? "Hide" : "Show"}
        </button>
        {state && <h1>Hidden Text</h1>}
        <br />
        <br />
        <button onClick={toggleData}>
          {showData ? "Hide" : "Show"}
        </button>
        {showData && <h1>Newly Created</h1>}
      </div>
    </>
  )
}

export default App
