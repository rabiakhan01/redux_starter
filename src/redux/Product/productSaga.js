import { put, takeEvery } from "redux-saga/effects";
import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_LIST, SET_ERROR, SET_PRODUCT_LIST, SET_REQUEST_FAILED, UPDATE_PRODUCT } from "./types";
import axios from "axios";
import { GetProduct } from "./selectors";

//fetch data from api
function* getProduct() {
    try {
        let data = yield axios.get('http://localhost:3001/products');
        data = data.data
        // console.log("🚀 ~ function*getProduct ~ result:", result)
        // console.log("🚀 ~ function*getProduct ~ data:", result)
        yield put({ type: SET_PRODUCT_LIST, data })
    } catch (error) {
        //console.log("🚀 ~ function*getProduct ~ result:", error)
        yield put({ type: SET_REQUEST_FAILED, error })
    }
}

//post new data in the fake api
function* addNewProduct(data) {
    try {
        yield axios.post(`http://localhost:3001/prs`, {
            id: data.data.id,
            name: data.data.name,
            price: data.data.price,
            image: data.data.image
        })
    } catch (error) {
        yield put({ type: SET_REQUEST_FAILED, error })
    }
}

function* removeProduct(data) {
    yield axios.delete(`http://localhost:3001/products/${data.id}`)
}

function* editProduct(data) {
    yield axios.patch(`http://localhost:3001/products/${data.data.id}`, data.data)
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct);
    yield takeEvery(ADD_PRODUCT, addNewProduct);
    yield takeEvery(DELETE_PRODUCT, removeProduct);
    yield takeEvery(UPDATE_PRODUCT, editProduct);
}

export default productSaga;