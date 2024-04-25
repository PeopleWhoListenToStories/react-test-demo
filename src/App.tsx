import React, { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [testVal, setTestVal] = useState<{
    name?: string
    createDateTime?: number
    upDateTime?: number
  }>({})
  const [str, setStr] = useState('')
  const handleClickTest = useCallback(async () => {
    try {
      const { code, data } = await fetch('/api')
        .then(res => res)
        .then(res => res.json())
      if (code === 200) {
        setTestVal(data)
        setStr(data)
        console.log(testVal)
      } else {
        setTestVal({})
        setStr('')
      }
    } catch (err) {
      setStr('request error...')
    }
  }, [])
  return (
    <div className="app-container">
      <br/>
      <br/> 
      <br/> 
      <div title="click me" >
        <b onClick={handleClickTest}>hi，i'm xulai</b>
      </div>
      <div style={{ textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:str }}></div><br/>
      {/* <div>{JSON.stringify(testVal)}</div> */}
    </div>
  )
}

export default App
