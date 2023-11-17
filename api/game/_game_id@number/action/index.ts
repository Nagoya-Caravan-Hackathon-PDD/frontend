/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** Game Action */
  post: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_ActionGameResponse;
    /** create game request */
    reqBody: Types.Input_ActionGameRequest;
  };
};
