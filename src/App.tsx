import React from 'react';
import './App.css';
import {asyncLoadData} from "./store/dataReducer";
import {useAppSelector} from "./hooks/useRedux";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    const count = useAppSelector(state => state.countReducer);
    console.log(count);
  return (
        <div className="App">
            {/*<div>Count: {count}</div>*/}

            <button onClick={()=>dispatch(asyncLoadData())}>LOAD DATA</button>
            {/*<button onClick={()=>dispatch(asyncDecCreator())}>DEC</button>*/}
        </div>

  );
}

export default App;
