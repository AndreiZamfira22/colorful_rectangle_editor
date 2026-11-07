import { ADD_BOX, SELECT_BOX, UPDATE_BOX_COLOR } from './actionTypes';

export function addBox(boxData) {
    return {
        type: ADD_BOX,
        payload: boxData
    };
}

export function selectBox(boxData) {
    return {
        type: SELECT_BOX,
        payload: boxData
    };
}

export function updateBoxColor(colorData) {
    return {
        type: UPDATE_BOX_COLOR,
        payload: colorData
    };
}