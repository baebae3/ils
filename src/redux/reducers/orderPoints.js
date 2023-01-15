import { ADD_CURRENT_COORD_FROM, ADD_CURRENT_COORD_TO } from "../constants";

const initialState = {
    coordFrom: [null],
    coordTo: [null]
}

export const order = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_COORD_FROM:
            return {
                ...state,
                coordFrom: action.payload
            }
        case ADD_CURRENT_COORD_TO:
            return {
                ...state,
                coordTo: action.payload
            }
        default:
            return state
    }
}