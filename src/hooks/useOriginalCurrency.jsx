import React from 'react'
import { useState } from 'react'

const useOriginalCurrency = (label, arrayCurrency) => {

    const[state, setState] = useState("")

    const OrigianalCurrency = ()=>(
        <>
            <label className='text-white block text-2xl font-bold mx-4'>
                {label}
            </label>
            <select 
                className='text-xl w-full ml-5 p-4 rounded-lg' 
                value={state}
                onChange={e=>setState(e.target.value)}    
            >
                <option value=''>Select</option>
                {(arrayCurrency)?(arrayCurrency.map(option=>(
                    <option
                    key={option.id}
                    value={option.id}>{option.name}</option>
                ))):null}  
            </select>
        </>
    )
    return[state, OrigianalCurrency]
}

export default useOriginalCurrency