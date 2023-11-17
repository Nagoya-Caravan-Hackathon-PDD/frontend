/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** Join Game */
  post: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_JoinGameResponse;
    /** create game request */
    reqBody: Types.Input_JoinGameRequest;
  };
};
