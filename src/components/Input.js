import {useEffect} from "react";

function Input({isDisabled = false, fromInput, setFromInput, toInput, convert}) {

    useEffect(function () {
        convert();
    }, [convert])

    return (
        <input className={'input'} type="text" value={isDisabled? toInput : fromInput} disabled={isDisabled} onChange={(e) => !isDisabled && setFromInput(e.target.value)}/>
    )
}

export default Input