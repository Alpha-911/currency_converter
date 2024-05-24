import data from "./data";

function CurrencySelector({isFrom = true, fromSelectedCurrency, setFromCurrencySelector, toSelectedCurrency, setToCurrencySelector}) {

    return (
        <div className={'currency-selector'}>
            <div className={'country-details'}>
                <img className={"flag-img"} src={isFrom? data[fromSelectedCurrency].flag : data[toSelectedCurrency].flag} alt="Country Flag"/>
                <h3>{isFrom? data[fromSelectedCurrency].code : data[toSelectedCurrency].code}</h3>
            </div>
            <CountrySelector setCurrencySelector={isFrom? setFromCurrencySelector : setToCurrencySelector} currencySelector={isFrom? fromSelectedCurrency : toSelectedCurrency}/>
        </div>
    )
}

function CountrySelector({setCurrencySelector, currencySelector}) {
    return (
        <select name="selector" id="selector" value={currencySelector} onChange={(e) => setCurrencySelector(e.target.value)}>

            {
                data.map((datum) =>
                    <option value={data.indexOf(datum)} key={datum.code}>{datum.country}</option>
                )
            }

        </select>
    )
}

export default CurrencySelector;


