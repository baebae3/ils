import { SET_POLYLINE_ROUTE } from "../constants";

const initialState = {
    currentPolylineRoute: [null]
}

export const polylineRoute = (state = initialState, action) => {
    switch (action.type) {
        case SET_POLYLINE_ROUTE:
            return {
                ...state,
                currentPolylineRoute: action.payload
            }
        default:
            return state
    }
}