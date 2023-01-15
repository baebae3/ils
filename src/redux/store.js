import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers/index'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

        }) : compose

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({})

sagaMiddleware.run(rootSaga)

export default store