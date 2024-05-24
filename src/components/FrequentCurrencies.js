function FrequentCurrencies({buttons, isFrom, setFromSelectedCurrency, setToSelectedCurrency}) {
    return (
        <div className={'frequent-buttons'}>
            {
                buttons.map((button) =>
                    <div className={'button'} onClick={() => isFrom? setFromSelectedCurrency(button.index) : setToSelectedCurrency(button.index)} key={button.index}>
                        {button.name}
                    </div>
                )
            }
        </div>
    )
}

export default FrequentCurrencies;