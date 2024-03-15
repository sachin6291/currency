import { useEffect } from "react"
import useOriginalCurrency from "../hooks/useOriginalCurrency"

export const Form = () => {
    const [OrigianalCurrency]= useOriginalCurrency('hello')
    const [ConvertingCurrency]= useOriginalCurrency('surprise')

    useEffect(()=>{
        const readAPI= async()=>{
            const key='cur_live_7d5HQyZySODXOjBb0RgjBKs8yybZkmqckkvUwQ22'
            const url=`https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=`
            const ph =`https://api.currencyapi.com/v3/currencies?apikey=${key}&currencies=`
            const call = await fetch(ph)
            const answer = await call.json([])
            // const arrayCurrency= answer.data.map(currency=>{
            //     console.log(currency);
            // })
            console.log([answer]);
        }
        readAPI()
    },[])
  return (
    <form>
        <OrigianalCurrency/>
        <ConvertingCurrency/>
    </form>
  )
}
export default Form
