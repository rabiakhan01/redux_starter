import { takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST } from "./types";

function* getProduct() {
    let data = yield fetch('http://localhost:3001/products');
    data = yield data.json();
    console.log("data", data);
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default productSaga;