import { FIND_ROW_INDEX } from "../constants";

const initialState = {
    rowId: null
}

export const table = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ROW_INDEX:
            return {
                ...state,
                rowId: action.payload
            }
        default:
            return state
    }
}