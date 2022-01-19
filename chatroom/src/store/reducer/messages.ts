import { RECEIVE_MESSAGE } from '../action';

const initialState: IMessageObject[] = [];

const messagesReducer = (state: IMessageObject[] = initialState, action: ActionType): IMessageObject[] => {
    switch (action.type) {
        case RECEIVE_MESSAGE: {
            return [...state, action.payload];
        }

        default: {
            return state;
        }
    }
}

export default messagesReducer;