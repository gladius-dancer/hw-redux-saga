import React from 'react';
import './App.css';
import {asyncLoadData} from "./store/dataReducer";
import {useAppSelector} from "./hooks/useRedux";
import {useDispatch} from "react-redux";
import TableComponent from "./components/TableComponent";
import {Button} from "@mui/material";

function App() {

    const dispatch = useDispatch();
    const data = useAppSelector(state => state.dataReducer);

    return (
        <div className="App">
            <div className="container">
                <div className="app-inner">
                    <Button onClick={() => dispatch(asyncLoadData())} variant="contained">LOAD DATA</Button>
                    <TableComponent rows={data} />
                </div>
            </div>
        </div>

    );
}

export default App;
