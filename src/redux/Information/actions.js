import { ADD_INFORMATION } from "./types";

export const addInformation = (data) => {
    return {
        type: ADD_INFORMATION,
        data,
    }
}