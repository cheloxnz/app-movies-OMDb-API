import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../../redux/reducers/index';
import rootSaga from '../../redux/sagas/index';


const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default store;

