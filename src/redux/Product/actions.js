import { PRODUCT_LIST } from "./types";

export const addProduct = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log("data", data.json())
    return {
        type: PRODUCT_LIST,
        data,
    }
}