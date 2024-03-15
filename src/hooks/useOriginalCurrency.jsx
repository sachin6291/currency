import React from 'react'
import { useState } from 'react'

const useOriginalCurrency = (label) => {
    const[state, setState] = useState('')
    
    const OrigianalCurrency = ()=>(
        <>
        <label className='text-white block text-2xl font-bold mx-4'>
            Placeholder
        </label>
        <select className='text-xl w-full ml-5 p-4 rounded-lg'>
            <option value=''>Select</option>
            <option value={label}>{label}</option>
        </select>
        </>
    )
    return[OrigianalCurrency]
}

export default useOriginalCurrency