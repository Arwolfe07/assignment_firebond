import React, { useState } from 'react';
import './App.css';
import SelectDisp from './components/SelectDisp';
import ConstDisp from './components/ConstDisp';
import DiffArgs from './components/DiffArgs';
import Argument from './components/Argument';
import And from './components/And';

function App() {
  const [res, setRes] = useState('undefined');
  const [dispSelect, setDispSelect] = useState('0');
  const [opts, setOpts] = useState([]);
  const [andArr, setAndArr] = useState(['2','2']);

  const selectDispHandler = (dispValue) => {
    setDispSelect(dispValue);
  };

  const closeButtonHandler = () => {
    setDispSelect('0');
    setRes('undefined');
  };

  const constChangeHandler = (value) => {
    setRes(value);
  };

  const diffArgsHandler = (args) => {
    setOpts(args);
  };

  const argumentChangeHandler = (arg) => {
    setRes(arg.boolVal);
  };

  const addAndArrHandler = () => {
    setAndArr((prev) => {
      return [...prev, '1'];
    });
  };

  const remvHandler =(arr)=>{
    setAndArr((prev)=> {return [...arr]})
  }

  const combineRes = (res)=>{
    setRes(res);
  }

  return (
    <>
      <div>
        <DiffArgs onDiffArgs={diffArgsHandler} />
      </div>
      {dispSelect === '0' && (
        <div>
          <SelectDisp onSelectDisp={selectDispHandler}/>
          <button onClick={closeButtonHandler}>X</button>
        </div>
      )}
      {dispSelect === '1' && (
        <div>
          <ConstDisp onConstChange={constChangeHandler} />
          <button onClick={closeButtonHandler}>X</button>
        </div>
      )}
      {dispSelect === '2' && (
        <div>
          <Argument args={opts} onArgumentHandler={argumentChangeHandler} />
          <button onClick={closeButtonHandler}>X</button>
        </div>
      )}
      {dispSelect === '3' && (
        <div>
          <SelectDisp
            onSelectDisp={selectDispHandler}
          />
          <button onClick={closeButtonHandler}>X</button>
          <div>
            <And compVal={dispSelect} onBack={remvHandler} arr={andArr} onAdd={addAndArrHandler} handler={argumentChangeHandler} opts={opts} onreset={combineRes}/>
          </div>
        </div>
      )}
      {
      dispSelect === '4' && (
        <div>
          <SelectDisp
            onSelectDisp={selectDispHandler}
          />
          <button onClick={closeButtonHandler}>X</button>
          <div>
            <And compVal={dispSelect} onBack={remvHandler} arr={andArr} onAdd={addAndArrHandler} handler={argumentChangeHandler} opts={opts} onreset={combineRes}/>
          </div>
        </div>
      )
      }

      <p>result: {res}</p>
    </>
  );
}

export default App;
