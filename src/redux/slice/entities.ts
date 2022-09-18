export type TUsers = {
  username: string;
  action: string;
  action_created_at: "2022-05-08T07:01:09.171245Z"
}

export type TUsersState = {
  users: Array<TUsers> | null
  status: string;
  error: Error | null;
}