export interface User {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
}

export type State = {
  token: string | null;
  user: User | null;
};

export type Action =
  | { type: "SET_TOKEN"; payload: { token: string; user: User } }
  | { type: "LOG_OUT" }
  | { type: "GET_USER"; payload: User[] };
