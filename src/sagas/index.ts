import {all} from "redux-saga/effects";
import {dataWatcher} from "./counterSaga";

export function* rootWatcher() {
    yield all([dataWatcher()])
}

