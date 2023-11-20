import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0);

  function setCountHandler() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button onClick={() => setCountHandler()}>
        Count Is {count}
      </button>
    </>
  )
}

export default App
