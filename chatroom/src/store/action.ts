export const CONNECT_CHAT: string = "/chat";
export const RECEIVE_MESSAGE: string = "/chat/receive";
export const SEND_MESSAGE: string = "/chat/send";

export const connect = (): ActionType => {
    return {
        type: CONNECT_CHAT,
        payload: "",
    }
}

export const receiveMessage = (): ActionType => {
    return {
        type: RECEIVE_MESSAGE,
        payload: ""
    }
}

export const sendMessage = (): ActionType => {
    return {
        type: SEND_MESSAGE,
        payload: "",
    }
}