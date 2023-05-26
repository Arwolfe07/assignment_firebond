import React, { useState } from 'react'

const ArgName = ({ id, value, onChangeValue, boolValue }) => {
    const [inpValue,setInpValue] = useState(value);
    const [boolVal, setBoolVal] = useState(boolValue);
    const nameChangeHandler = (e) => {
        setInpValue(e.target.value);
        onChangeValue(id, e.target.value,boolVal);
    }

    const selectChangeHandler = (e)=>{
        setBoolVal(e.target.value);
        onChangeValue(id,inpValue,e.target.value);
    }

    return (
        <>
            <input type='text' value={inpValue} onChange={nameChangeHandler}></input>
            <select onChange={selectChangeHandler} value={boolVal}>
                <option value={true}>true</option>
                <option value={false}>false</option>
            </select>
        </>
    )
}

export default ArgName;