import { combineReducers } from "redux";
import { order } from "./orderPoints";
import { table } from './table'
import { polylineRoute } from "./polyline";

const reducer = combineReducers({
    order,
    table,
    polylineRoute
})

export default reducer