import WorldCurrency from '../img/foreign-exchange-market-world-currency.png'
import  Form  from './Form'
const Header = ({setConverter, rate}) => {
  return (
    <div className='md:flex container mx-auto mt-16'> 
        <div className='hidden md:block w-max'>
            <img src={WorldCurrency} alt='currency image'/> 
        </div>
        <div className='pl-2'>
            <h1 className='font-bold text-white text-5xl text-center mx-auto'>World Currency Exchange Rate</h1>
            <Form
              setConverter={setConverter}
              rate={rate}
            />
        </div>
    </div>
  )
}

export default Header