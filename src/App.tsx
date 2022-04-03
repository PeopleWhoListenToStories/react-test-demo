import React, { useCallback, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [testVal, setTestVal] = useState<{
    name?: string
    createDateTime?: number
    upDateTime?: number
  }>({})
  const [str, setStr] = useState('')
  const handleClickTest = useCallback(async () => {
    const { code, data } = await fetch('/api/v1')
      .then(res => res)
      .then(res => res.json())
    if (code === 200) {
      // setTestVal(data)
      setStr(data)
    } else {
      setTestVal({})
      setStr('')
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <span onClick={handleClickTest}>测试{str}</span>
      </header>
    </div>
  )
}

export default App
