import { ADD_BOX, SELECT_BOX, UPDATE_BOX_COLOR } from './actionTypes';

const initialState = {
    boxes: [],
    selectedBox: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case ADD_BOX: {
            const newBox = {
                ...action.payload,
                id: `box-${state.boxes.length + 1}`,
                creationTime: new Date().toISOString()
            };
            return {
                ...state,
                boxes: [...state.boxes, newBox]
            };
        }

        case SELECT_BOX:
            return {
                ...state,
                selectedBox: action.payload
            };

        case UPDATE_BOX_COLOR: {
            const colorData = action.payload;
            const updatedBoxes = state.boxes.map(box =>
                box.id === state.selectedBox.id ? { ...box, ...colorData } : box
            );
            return {
                ...state,
                boxes: updatedBoxes,
                selectedBox: { ...state.selectedBox, ...colorData }
            };
        }
        default:
            return state;

    }
}