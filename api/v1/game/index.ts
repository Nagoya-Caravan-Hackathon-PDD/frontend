/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** Create Game */
  post: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_CreateGameResponse;
    /** create game request */
    reqBody: Types.Input_CreateGameRequest;
  };
};
