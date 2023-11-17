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

    query?:
      | {
          pageID?: number | undefined;
          pageSize?: number | undefined;
          userID?: string | undefined;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_ListEncounterResponse[];
  };

  /** Create Encount entory */
  post: {
    reqHeaders?:
      | {
          /** Authorization */
          Authorization: string;
        }
      | undefined;

    status: 200;
    /** success response */
    resBody: Types.Output_CreateEncounterResponse;
    /** create encounter request */
    reqBody: Types.Input_CreateEncounterRequest;
  };
};
