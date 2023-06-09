import {Data, State} from "../modules/State";

const initialState: State = {
    data: [],
    loading: false,
    error: null
};

export const LOAD_DATA = "LOAD_DATA";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAIL = "LOAD_DATA_FAIL";
export const ASYNC_LOAD_DATA = "ASYNC_LOAD_DATA";

export default function dataReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case LOAD_DATA_FAIL:
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload
            }
    }
    return state
}

export const loadData = () => ({type: LOAD_DATA});
export const loadDataSuccess = (data: Data[]) => ({type: LOAD_DATA_SUCCESS, payload: data});
export const loadDataFail = (error: any | null) => ({type: LOAD_DATA_FAIL, payload: error});
export const asyncLoadData = () => ({type: ASYNC_LOAD_DATA});



