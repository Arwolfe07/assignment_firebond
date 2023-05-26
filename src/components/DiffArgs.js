import React, { useEffect, useState } from 'react'
import ArgName from './ArgName';


const DiffArgs = ({ onDiffArgs }) => {
    const [args, setArgs] = useState([{ id: 1, value: 'My Arg', boolVal: 'false' }]);

    const addArgHandler = () => {
        const updateArg = [...args, { id: Math.random(), value: 'My Arg', boolVal: 'false' }];
        setArgs(updateArg);
    }

    const changeHandler = (id, value, boolVal) => {
        setArgs((prevArgs) => {
            const updatedArgs = prevArgs.map((args) => {
                if (args.id === id) {
                    return { ...args, value, boolVal };
                }
                return args;
            });
            return updatedArgs;
        });

    }

    useEffect(() => { onDiffArgs(args); }, [args]);


    return (
        <>
            <div>{args.map((arg) => (<div><ArgName id={arg.id} key={arg.id} value={arg.value} onChangeValue={changeHandler} boolValue={arg.boolVal} /></div>))}</div>
            <button onClick={addArgHandler}>+ add arg</button>
        </>
    )
}

export default DiffArgs