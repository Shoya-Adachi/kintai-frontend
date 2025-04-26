// login時に送るデータの型
export type LoginFormInputs = {
    name: string,
    password: string;
};

export type KintaiData = {
  user_id: string | null,
  start_time: string;
}