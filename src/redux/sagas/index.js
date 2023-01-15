import { takeLatest, select, put } from '@redux-saga/core/effects'
import { ADD_CURRENT_COORD_TO } from '../constants'
import { setPolyline } from '../actions/polylineAction'
import { getPolylineRoute } from '../../http/polylineRoutes'
import { sort } from '../../utils/utils'

export function* workerSaga() {
    const from = yield select(store => store.order.coordFrom)
    const to = yield select(store => store.order.coordTo)
    const data = yield getPolylineRoute(from[1], from[0], to[1], to[0])
    yield sort(data)
    yield put(setPolyline(data))
}

export function* watchClickSaga() {
    yield takeLatest(ADD_CURRENT_COORD_TO, workerSaga)

}

export default function* rootSaga() {
    yield watchClickSaga()
}
