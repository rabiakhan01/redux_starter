import { ADD_INFORMATION } from "./types";

const informationData = (state = [], action) => {
    switch (action.type) {
        case ADD_INFORMATION:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}

export default informationData;