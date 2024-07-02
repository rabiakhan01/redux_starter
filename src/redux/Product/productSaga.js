import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./types";

function* getProduct() {
    let data = yield fetch('http://localhost:3001/products');
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default productSaga;