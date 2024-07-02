import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from './RootReducer';
import productSaga from "./Product/productSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore(
    {
        reducer: RootReducer,
        middleware: () => [sagaMiddleware]
    }
);

sagaMiddleware.run(productSaga);


