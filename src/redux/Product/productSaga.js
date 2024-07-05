import { put, takeEvery } from "redux-saga/effects";
import { ADD_PRODUCT, DELETE_PRODUCT, END_POINT_EXISTS, PRODUCT_LIST, SET_PRODUCT_LIST, SET_REQUEST_FAILED, UPDATE_PRODUCT } from "./types";
import axios from "axios";

//fetch data from api

const endPoint = 'http://localhost:3001/products/';

function* checkEndPoint(id) {
    try {
        let data;
        if (id > 0) {
            data = yield axios.get(endPoint + id);
        }
        else {
            data = yield axios.get(endPoint);
        }
        data = data.data
        yield put({ type: SET_PRODUCT_LIST, data })
    } catch (error) {
        yield put({ type: SET_REQUEST_FAILED, error })
    }
}

function* getProduct() {
    try {
        let data = yield axios.get(endPoint);
        data = data.data
        yield put({ type: SET_PRODUCT_LIST, data })
    } catch (error) {
        yield put({ type: SET_REQUEST_FAILED, error })
    }
}

//post new data in the fake api
function* addNewProduct(data) {
    const id = String(data.data.id)
    try {
        yield axios.post(endPoint, {
            id: id,
            name: data.data.name,
            price: data.data.price,
            image: data.data.image
        })
    } catch (error) {
        yield put({ type: SET_REQUEST_FAILED, error })
    }
}

function* removeProduct(data) {
    console.log(endPoint + data.id)
    try {
        let result = yield axios.delete(endPoint + data.id)
    } catch (error) {
        yield put({ type: SET_REQUEST_FAILED, error: "hello" })
    }
}

function* editProduct(data) {
    console.log(typeof (data.data.id))
    try {
        yield axios.patch(endPoint + data.data.id, { ...data.data })
    } catch (error) {
        yield put({ type: SET_REQUEST_FAILED, error })
    }
}

function* productSaga() {
    yield takeEvery(END_POINT_EXISTS, checkEndPoint)
    yield takeEvery(PRODUCT_LIST, getProduct);
    yield takeEvery(ADD_PRODUCT, addNewProduct);
    yield takeEvery(DELETE_PRODUCT, removeProduct);
    yield takeEvery(UPDATE_PRODUCT, editProduct);
}

export default productSaga;