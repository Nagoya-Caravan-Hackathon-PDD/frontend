/* eslint-disable */
export type Input_ActionGameRequest = {
  command_id?: number | undefined;
  gameID?: string | undefined;
  user_id?: string | undefined;
};

export type Input_CreateEncounterRequest = {
  encounted_user_id?: string | undefined;
  user_id?: string | undefined;
};

export type Input_CreateGameRequest = {
  owner_id?: string | undefined;
};

export type Input_CreateUser = {
  github_id?: string | undefined;
};

export type Input_JoinGameRequest = {
  gameID?: string | undefined;
  user_id?: string | undefined;
};

export type Input_ReadyGameRequest = {
  gameID?: string | undefined;
  user_id?: string | undefined;
};

export type Output_CreateEncounterResponse = {
  encounter_id?: string | undefined;
};

export type Output_CreateGameResponse = {
  game_id?: string | undefined;
  game_server_token?: string | undefined;
};

export type Output_CreateUserResponse = {
  /** ユーザの情報 */
  message?: string | undefined;
};

export type Output_DeleteUserResponse = {
  message?: string | undefined;
};

export type Output_JoinGameResponse = {
  game_id?: string | undefined;
  game_server_token?: string | undefined;
};

export type Output_ListEncounterResponse = {
  created_at?: string | undefined;
  encounter_id?: string | undefined;
  encouted_user_id?: string | undefined;
  user_id?: string | undefined;
};

export type Output_ReadUserResponse = {
  github_id?: string | undefined;
  /** ユーザの情報 */
  user_id?: string | undefined;
};
