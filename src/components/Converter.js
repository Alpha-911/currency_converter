import CurrencySelector from "./CurrencySelector";
import Input from "./Input";
import {useEffect, useState} from "react";
import FrequentCurrencies from "./FrequentCurrencies";
import fromButtonData from "./fromButtonData";
import toButtonData from "./toButtonData";

function Converter() {

    const [fromSelectedCurrency, setFromSelectedCurrency] = useState(15)
    const [toSelectedCurrency, setToSelectedCurrency] = useState(31)
    const [fromInput, setFromInput] = useState('');
    const [toInput, setToInput] = useState('');
    const [currencyData, setCurrencyData] = useState([])
    const KEY = 'fca_live_o18lzhREIGBsWE1mDdq0KUkruPhtiKfpPPBFUkt9';

    function swap() {
        let temp = fromSelectedCurrency;
        setFromSelectedCurrency(toSelectedCurrency);
        setToSelectedCurrency(temp);

        temp = fromInput;
        setFromInput(toInput);
        setToInput(temp);
    }


    useEffect(function () {
        async function getData() {
            const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${KEY}`);
            const data = await response.json();
            setCurrencyData(data.data)
        }
        getData();
    }, [])

    const values = Object.values(currencyData);
    function convert() {
        setToInput(String(Number(fromInput) * Number(values[toSelectedCurrency]) / Number(values[fromSelectedCurrency])))
    }

    return (
        <div className="converter">
            <div className="input-currency">
                <CurrencySelector fromSelectedCurrency={fromSelectedCurrency} setFromCurrencySelector={setFromSelectedCurrency} />
                <Input fromInput={fromInput} setFromInput={setFromInput} convert={convert}/>
                <FrequentCurrencies buttons={fromButtonData} isFrom={true} setFromSelectedCurrency={setFromSelectedCurrency} />
            </div>

            <img className={'swap-button'} src='https://raw.githubusercontent.com/Alpha-911/currency_converter/dda529ae38294ee55059630f6a55f3d03bd2cc80/src/components/SwapButton.svg' alt="Swap Button" onClick={swap}/>

            <div className="output-currency">
                <CurrencySelector isFrom={false} toSelectedCurrency={toSelectedCurrency} setToCurrencySelector={setToSelectedCurrency} />
                <Input isDisabled={true} toInput={toInput} setToInput={setToInput} convert={convert}/>
                <FrequentCurrencies buttons={toButtonData} isFrom={false} setToSelectedCurrency={setToSelectedCurrency}/>
            </div>
        </div>
    )
}

export default Converter;
