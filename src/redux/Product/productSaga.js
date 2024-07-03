import { put, takeEvery } from "redux-saga/effects";
import { ADD_PRODUCT, PRODUCT_LIST, SET_PRODUCT_LIST } from "./types";
import axios, { Axios } from "axios";
function* getProduct() {
    let data = yield fetch('http://localhost:3001/products');
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* addNewProduct(data) {
    yield axios.post(`http://localhost:3001/products`, {
        id: data.data.id,
        name: data.data.name,
        price: data.data.price,
        image: data.data.image
    })
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct)
    yield takeEvery(ADD_PRODUCT, addNewProduct)
}

export default productSaga;