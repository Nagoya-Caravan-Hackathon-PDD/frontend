/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** Delete User */
  delete: {
    status: 200;
    /** success response */
    resBody: Types.Output_DeleteUserResponse;
  };

  /** Get any User */
  get: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_ReadUserResponse;
  };
};
