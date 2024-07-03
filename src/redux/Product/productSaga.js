import { put, takeEvery } from "redux-saga/effects";
import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_LIST, SET_PRODUCT_LIST } from "./types";
import axios from "axios";

//fetch data from api
function* getProduct() {
    let data = yield fetch('http://localhost:3001/products');
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}

//post new data in the fake api
function* addNewProduct(data) {
    yield axios.post(`http://localhost:3001/products`, {
        id: data.data.id,
        name: data.data.name,
        price: data.data.price,
        image: data.data.image
    })
}

function* removeProduct(data) {
    yield axios.delete(`http://localhost:3001/products/${data.id}`)
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct);
    yield takeEvery(ADD_PRODUCT, addNewProduct);
    yield takeEvery(DELETE_PRODUCT, removeProduct)
}

export default productSaga;