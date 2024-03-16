import { useEffect, useState } from 'react'
import Header from './components/Header'


function App() {
  const [converter, setConverter]=useState({})
  const [rate, setRate]=useState(0)

  useEffect(()=>{
    if(Object.keys(converter).length > 0){

      const currencyRate = async ()=>{
        const {selectedOne, selectedTwo}= converter
        const key = 'cur_live_7d5HQyZySODXOjBb0RgjBKs8yybZkmqckkvUwQ22'
        const url =`https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=${selectedTwo}&base_currency=${selectedOne}`
      
        const call= await fetch(url)
        const reply = await call.json()
        setRate(reply.data[selectedTwo].value);
      }
      currencyRate()
    }
  },[converter])

  return (
    <>
      <Header
        setConverter={setConverter}
        rate ={rate}
      />
    </>
  )
}

export default App
