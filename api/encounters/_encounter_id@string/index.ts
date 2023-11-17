/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** Get All Encounters */
  get: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_ListEncounterResponse;
  };
};
