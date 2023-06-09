import {apply, call, put, takeEvery} from "redux-saga/effects";
import {ASYNC_LOAD_DATA, loadData} from "../store/dataReducer";

function* asyncLoadData(): any {
    const request = yield call(fetch, "https://5f7998dbe402340016f9321f.mockapi.io/jobs");
    const data = yield apply(request, request.json, []);
    yield put(loadData(data));
}

export function* dataWatcher() {
    yield  takeEvery(ASYNC_LOAD_DATA, asyncLoadData)
}