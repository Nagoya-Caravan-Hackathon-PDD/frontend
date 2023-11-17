/* eslint-disable */
import type * as Types from '../../../../@types';

export type Methods = {
  /** Game Ready */
  post: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** create game request */
    reqBody: Types.Input_ReadyGameRequest;
  };
};
