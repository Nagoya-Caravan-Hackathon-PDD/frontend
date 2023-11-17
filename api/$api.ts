import { dataToURLString } from 'aspida';
import type { Methods as Methods_194xoh8 } from './encounters';
import type { Methods as Methods_ktwtk2 } from './encounters/_encounter_id@string';
import type { Methods as Methods_gyft88 } from './game';
import type { Methods as Methods_166ictg } from './game/_game_id';
import type { Methods as Methods_r9cp5v } from './game/_game_id/action';
import type { Methods as Methods_eygh08 } from './game/_game_id/ready';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_1m2ih5q } from './users/_user_id@string';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? '//localhost:8080/v1' : baseURL
  ).replace(/\/$/, '');
  const PATH0 = '/encounters';
  const PATH1 = '/game';
  const PATH2 = '/action';
  const PATH3 = '/ready';
  const PATH4 = '/users';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    encounters: {
      _encounter_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * Get All Encounters
           * @returns success response
           */
          get: (
            option?:
              | {
                  headers?: Methods_ktwtk2['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined,
          ) =>
            fetch<
              Methods_ktwtk2['get']['resBody'],
              BasicHeaders,
              Methods_ktwtk2['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * Get All Encounters
           * @returns success response
           */
          $get: (
            option?:
              | {
                  headers?: Methods_ktwtk2['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined,
          ) =>
            fetch<
              Methods_ktwtk2['get']['resBody'],
              BasicHeaders,
              Methods_ktwtk2['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get All Encounters
       * @returns success response
       */
      get: (
        option?:
          | {
              query?: Methods_194xoh8['get']['query'] | undefined;
              headers?: Methods_194xoh8['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<
          Methods_194xoh8['get']['resBody'],
          BasicHeaders,
          Methods_194xoh8['get']['status']
        >(prefix, PATH0, GET, option).json(),
      /**
       * Get All Encounters
       * @returns success response
       */
      $get: (
        option?:
          | {
              query?: Methods_194xoh8['get']['query'] | undefined;
              headers?: Methods_194xoh8['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<
          Methods_194xoh8['get']['resBody'],
          BasicHeaders,
          Methods_194xoh8['get']['status']
        >(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      /**
       * Create Encount entory
       * @param option.body - create encounter request
       * @returns success response
       */
      post: (option: {
        body: Methods_194xoh8['post']['reqBody'];
        headers?: Methods_194xoh8['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods_194xoh8['post']['resBody'],
          BasicHeaders,
          Methods_194xoh8['post']['status']
        >(prefix, PATH0, POST, option).json(),
      /**
       * Create Encount entory
       * @param option.body - create encounter request
       * @returns success response
       */
      $post: (option: {
        body: Methods_194xoh8['post']['reqBody'];
        headers?: Methods_194xoh8['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods_194xoh8['post']['resBody'],
          BasicHeaders,
          Methods_194xoh8['post']['status']
        >(prefix, PATH0, POST, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | {
              method?: 'get' | undefined;
              query: Methods_194xoh8['get']['query'];
            }
          | undefined,
      ) =>
        `${prefix}${PATH0}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    game: {
      _game_id: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          action: {
            /**
             * Game Action
             * @param option.body - create game request
             * @returns success response
             */
            post: (option: {
              body: Methods_r9cp5v['post']['reqBody'];
              headers?: Methods_r9cp5v['post']['reqHeaders'] | undefined;
              config?: T | undefined;
            }) =>
              fetch<
                Methods_r9cp5v['post']['resBody'],
                BasicHeaders,
                Methods_r9cp5v['post']['status']
              >(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * Game Action
             * @param option.body - create game request
             * @returns success response
             */
            $post: (option: {
              body: Methods_r9cp5v['post']['reqBody'];
              headers?: Methods_r9cp5v['post']['reqHeaders'] | undefined;
              config?: T | undefined;
            }) =>
              fetch<
                Methods_r9cp5v['post']['resBody'],
                BasicHeaders,
                Methods_r9cp5v['post']['status']
              >(prefix, `${prefix1}${PATH2}`, POST, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          ready: {
            /**
             * Game Ready
             * @param option.body - create game request
             * @returns success response
             */
            post: (option: {
              body: Methods_eygh08['post']['reqBody'];
              headers?: Methods_eygh08['post']['reqHeaders'] | undefined;
              config?: T | undefined;
            }) =>
              fetch<
                Methods_eygh08['post']['resBody'],
                BasicHeaders,
                Methods_eygh08['post']['status']
              >(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * Game Ready
             * @param option.body - create game request
             * @returns success response
             */
            $post: (option: {
              body: Methods_eygh08['post']['reqBody'];
              headers?: Methods_eygh08['post']['reqHeaders'] | undefined;
              config?: T | undefined;
            }) =>
              fetch<
                Methods_eygh08['post']['resBody'],
                BasicHeaders,
                Methods_eygh08['post']['status']
              >(prefix, `${prefix1}${PATH3}`, POST, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
          /**
           * Join Game
           * @param option.body - create game request
           * @returns success response
           */
          post: (option: {
            body: Methods_166ictg['post']['reqBody'];
            headers?: Methods_166ictg['post']['reqHeaders'] | undefined;
            config?: T | undefined;
          }) =>
            fetch<
              Methods_166ictg['post']['resBody'],
              BasicHeaders,
              Methods_166ictg['post']['status']
            >(prefix, prefix1, POST, option).json(),
          /**
           * Join Game
           * @param option.body - create game request
           * @returns success response
           */
          $post: (option: {
            body: Methods_166ictg['post']['reqBody'];
            headers?: Methods_166ictg['post']['reqHeaders'] | undefined;
            config?: T | undefined;
          }) =>
            fetch<
              Methods_166ictg['post']['resBody'],
              BasicHeaders,
              Methods_166ictg['post']['status']
            >(prefix, prefix1, POST, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Create Game
       * @param option.body - create game request
       * @returns success response
       */
      post: (option: {
        body: Methods_gyft88['post']['reqBody'];
        headers?: Methods_gyft88['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods_gyft88['post']['resBody'],
          BasicHeaders,
          Methods_gyft88['post']['status']
        >(prefix, PATH1, POST, option).json(),
      /**
       * Create Game
       * @param option.body - create game request
       * @returns success response
       */
      $post: (option: {
        body: Methods_gyft88['post']['reqBody'];
        headers?: Methods_gyft88['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods_gyft88['post']['resBody'],
          BasicHeaders,
          Methods_gyft88['post']['status']
        >(prefix, PATH1, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    users: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`;

        return {
          /**
           * Get any User
           * @returns success response
           */
          get: (
            option?:
              | {
                  headers?: Methods_1m2ih5q['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined,
          ) =>
            fetch<
              Methods_1m2ih5q['get']['resBody'],
              BasicHeaders,
              Methods_1m2ih5q['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * Get any User
           * @returns success response
           */
          $get: (
            option?:
              | {
                  headers?: Methods_1m2ih5q['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined,
          ) =>
            fetch<
              Methods_1m2ih5q['get']['resBody'],
              BasicHeaders,
              Methods_1m2ih5q['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          /**
           * Delete User
           * @returns success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1m2ih5q['delete']['resBody'],
              BasicHeaders,
              Methods_1m2ih5q['delete']['status']
            >(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete User
           * @returns success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1m2ih5q['delete']['resBody'],
              BasicHeaders,
              Methods_1m2ih5q['delete']['status']
            >(prefix, prefix1, DELETE, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Create User
       * @param option.body - create user request
       * @returns success response
       */
      post: (option: {
        body: Methods_1xhiioa['post']['reqBody'];
        headers?: Methods_1xhiioa['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods_1xhiioa['post']['resBody'],
          BasicHeaders,
          Methods_1xhiioa['post']['status']
        >(prefix, PATH4, POST, option).json(),
      /**
       * Create User
       * @param option.body - create user request
       * @returns success response
       */
      $post: (option: {
        body: Methods_1xhiioa['post']['reqBody'];
        headers?: Methods_1xhiioa['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods_1xhiioa['post']['resBody'],
          BasicHeaders,
          Methods_1xhiioa['post']['status']
        >(prefix, PATH4, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
