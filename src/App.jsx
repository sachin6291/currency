import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [converter, setConverter]=useState({})
  return (
    <>
      <Header
        setConverter={setConverter}
      />
    </>
  )
}

export default App
