// login時に送るデータの型
export type LoginFormInputs = {
    name: string,
    password: string;
};

export type KintaiData = {
  kintai_id?: string | null,
  user_id?: string | null,
  time: string;
}