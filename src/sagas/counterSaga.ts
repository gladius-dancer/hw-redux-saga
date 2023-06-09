import {apply, call, put, takeEvery} from "redux-saga/effects";
import {ASYNC_LOAD_DATA, loadData, loadDataFail, loadDataSuccess} from "../store/dataReducer";

function* asyncLoadData(): any {
    try {
        yield put(loadData())
        const request = yield call(fetch, "https://5f7998dbe402340016f9321f.mockapi.io/jobs");
        const data = yield apply(request, request.json, []);
        yield put(loadDataSuccess(data));
    }
    catch (e: any | null) {
        yield put(loadDataFail(e));
    }

}

export function* dataWatcher() {
    yield  takeEvery(ASYNC_LOAD_DATA, asyncLoadData)
}