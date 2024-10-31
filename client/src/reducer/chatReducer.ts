import { Action, State } from "../interfaces/Chat";

const chatReducer = (chatState: State, action: Action) => {
  switch (action.type) {
    case "GET_CHAT_BY_USER": {
      return {
        ...chatState,
        chats: action.payload,
      };
    }
    case "POST_CHAT": {
      return {
        ...chatState,
        chats: [...chatState.chats, action.payload],
      };
    }
    case "FIND_CHAT_BY_USER": {
      return {
        ...chatState,
        chats: chatState.chats.filter(
          (chat) => chat._id === action.payload._id
        ),
      };
    }
    default:
      return chatState;
  }
};

export default chatReducer;
