interface IMessageObject {
    user: string,
    message: string,
}

type ActionType = {
    type: string;
    payload: any;
}

type DispatchType = (args: ActionType) => ActionType;