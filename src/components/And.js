// And.js
import React, { useEffect } from 'react';
import Argument from './Argument';


const And = ({ onAdd, compVal, arr, handler, opts, onreset, onBack }) => {
    useEffect(() => {
        let res = 'false';
        if (compVal === '3') {
            for (let i = 0; i < opts.length; i++) {
                if (opts[i].boolVal == 'true') {
                    res = 'true';
                    continue;
                } else {
                    res = 'false';
                    break;
                }
            }
        }
        if (compVal === '4') {

            for (let i = 0; i < opts.length; i++) {
                if (opts[i].boolVal == 'true') {
                    res = 'true';
                    break;
                }
                else {
                    res = 'false';
                    continue;
                }
            }
        }
        onreset(res);
    }, [opts]);

    const clickHandler = () => {
        arr.pop();
        onBack(arr);
    }

    return (
        <div>
            <div>
                {arr.map((opt) => (<div><Argument args={opts} onArgumentHandler={handler} /><button onClick={clickHandler}>X</button></div>))}
            </div>
            <button onClick={onAdd}>+ add</button>
        </div>
    );
};

export default And;
