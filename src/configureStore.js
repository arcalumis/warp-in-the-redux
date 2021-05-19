import "regenerator-runtime/runtime";
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import fetchUserDataSaga from './sagas/fetchUserData.saga'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
    ),
  )

  sagaMiddleware.run(fetchUserDataSaga)

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}