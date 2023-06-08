type State = {
    id: number,
    jobId: string,
    title: string
}

const initialState: State[] = []

export const LOAD_DATA = "LOAD_DATA";
export const ASYNC_LOAD_DATA = "ASYNC_LOAD_DATA";

export default function countReducer(state= initialState, action:any){
        switch (action.type){
            case LOAD_DATA: return  {...state, data: action.payload}
        }
    return state
}


export const loadData = (data: State) => ({type: LOAD_DATA, payload: data});
export const asyncLoadData = () => ({type: ASYNC_LOAD_DATA});



