type DataType = {
  username: string;
  action: string;
  action_createad_at: string;
}

export const data: Array<DataType> = [{
    username: "user-001",
    action: "logged_in",
    action_createad_at: "2022-05-08T07:01:09.171245Z"
  }, {
    username: "user-001",
    action: "button_sign_in_tapped",
    action_createad_at: "2022-05-08T07:02:09.171245Z"
  },
  {
    username: "user-001",
    action: "button_log_out_tapped",
    action_createad_at: "2022-05-08T07:03:09.171245Z"
  },
];