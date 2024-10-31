export interface Chat {
  _id: string;
  members: string[];
}

export type Action =
  | { type: "GET_CHAT_BY_USER"; payload: Chat[] }
  | { type: "POST_CHAT"; payload: Chat }
  | { type: "FIND_CHAT_BY_USER"; payload: Chat };

export type State = {
  chats: Chat[];
};
