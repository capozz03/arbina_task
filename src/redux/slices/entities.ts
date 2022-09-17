export type TUsers = {
  username: string;
  action: string;
  action_createad_at: "2022-05-08T07:01:09.171245Z"
}

export type TUsersState = {
  users: Array<TUsers>;
  status: string;
  error: Error | null;
}