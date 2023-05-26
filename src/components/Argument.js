import React, { useEffect, useState } from 'react'

const Argument = ({ args, onArgumentHandler }) => {
    const [selectId, setSelectId] = useState('1');
    const findUpdated = (id) => {
        return args.find((arg) => arg.id == id);
    }

    const changeHandler = (e) => {
        const id = e.target.options[e.target.selectedIndex].id;
        const arg = findUpdated(id);
        setSelectId(arg.id);
        onArgumentHandler(arg);
    }

    useEffect(() => {
        const arg = findUpdated(selectId);
        onArgumentHandler(arg);
    }, [args]);

    return (
        <>
            <select onChange={changeHandler}>
                <option value='' disabled selected='select'>select...</option>
                {args.map((arg) => (<option value={arg.value} key={arg.id} id={arg.id}>{arg.value}</option>))}
            </select>
        </>
    )
}

export default Argument