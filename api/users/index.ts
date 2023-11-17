/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /** Create User */
  post: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_CreateUserResponse;
    /** create user request */
    reqBody: Types.Input_CreateUser;
  };
};
