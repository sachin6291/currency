import WorldCurrency from '../img/foreign-exchange-market-world-currency.png'
const Header = () => {
  return (
    <div className='inline'> 
        <div>
            <img src={WorldCurrency} alt='currency image'/> 
        </div>
        <div>
            <h1>World Currency Exchange Rate</h1>
        </div>
    </div>
  )
}

export default Header