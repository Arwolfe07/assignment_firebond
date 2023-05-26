import React, { useEffect, useState } from 'react'

const ConstDisp = ({onConstChange}) => {
    const [selectedValue,setSelectedValue] = useState('false');

    useEffect(()=>{
        onConstChange(selectedValue);
    },[onConstChange,selectedValue]);

    const changeHandler = (e) => {
        setSelectedValue(e.target.value);
    }
    return (
        <select onChange={changeHandler}>
            <option value={true}>true</option>
            <option value={false} selected='select'>false</option>
        </select>
    )
}

export default ConstDisp