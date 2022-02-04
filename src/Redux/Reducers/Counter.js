import { INC, DEC } from '../ActionCreator/Action';

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    
    const { type , payload} = action;
    switch (type) {
        case INC: {
            const { num   } = payload;
            return {
                count: state.count + num,
            }
        }
        case DEC:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}