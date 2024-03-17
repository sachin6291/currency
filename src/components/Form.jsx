import { useEffect, useState } from "react"
import useOriginalCurrency from "../hooks/useOriginalCurrency"

export const Form = ({setConverter, rate}) => {
    const[currency, setCurrency]=useState([])
    const[error, setError]= useState(false)
    const [selectedOne,OrigianalCurrency]= useOriginalCurrency('From',currency)
    const [selectedTwo,ConvertingCurrency]= useOriginalCurrency('To', currency)

    console.log(selectedOne,selectedTwo);
    
useEffect(()=>{
        const readAPI= async()=>{
            const key='cur_live_7d5HQyZySODXOjBb0RgjBKs8yybZkmqckkvUwQ22'
            const url =`https://api.currencyapi.com/v3/currencies?apikey=${key}&currencies=`

            const call = await fetch(url)
            const answer = await call.json()
            const arrayCurrency = Object.entries(answer.data).map(([code, currency])=>{
               return {
                id: code,
                name: currency.name
               }
            })
            setCurrency(arrayCurrency)
        }
        readAPI()
    },[])

    const handleSubmit=e=>{
        e.preventDefault()
        if([selectedOne,selectedTwo].includes('')){
            setError(true)
            return
        }
        setError(false)
        setConverter({
            selectedOne,
            selectedTwo
        })
    }

  return (
    <>
        <form onSubmit={handleSubmit}

        >
            <OrigianalCurrency/>
            <ConvertingCurrency/>
            <input 
                type="submit" 
                value='Convert'
                className="w-full p-2 text-xl uppercase rounded-lg bg-white mt-8 ml-5" />
        </form>
        <div
            className="text-white mt-4 text-center"
        >
            {rate?<p className="text-2xl">1{selectedOne}= <span className="text-3xl">{rate} {selectedTwo}</span></p>: null}
        </div>
    </>
  )
}
export default Form
