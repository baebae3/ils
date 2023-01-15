import { ADD_CURRENT_COORD_FROM, ADD_CURRENT_COORD_TO } from "../constants";

export const addCoordFrom = ([from, to]) => ({
    type: ADD_CURRENT_COORD_FROM,
    payload: [from, to]
})

export const addCoordTo = ([from, to]) => ({
    type: ADD_CURRENT_COORD_TO,
    payload: [from, to]
})
