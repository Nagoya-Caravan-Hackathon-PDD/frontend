import { dataToURLString } from 'aspida';
import type { Methods as Methods_1gukmr6 } from './v1/encounters';
import type { Methods as Methods_1spogak } from './v1/encounters/_encounter_id@string';
import type { Methods as Methods_n1pssi } from './v1/game';
import type { Methods as Methods_siqaom } from './v1/game/_game_id@number/action';
import type { Methods as Methods_1nv6l43 } from './v1/game/_game_id@number/ready';
import type { Methods as Methods_1aoson } from './v1/game/_game_id@string';
import type { Methods as Methods_odq9yo } from './v1/users';
import type { Methods as Methods_11doa8 } from './v1/users/_user_id@string';
import type { AspidaClient, BasicHeaders } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? '//localhost:8080/v1' : baseURL
  ).replace(/\/$/, '');
  const PATH0 = '/v1/encounters';
  const PATH1 = '/v1/game';
  const PATH2 = '/action';
  const PATH3 = '/ready';
  const PATH4 = '/v1/users';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    v1: {
      encounters: {
        _encounter_id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            /**
             * Get All Encounters
             * @returns success response
             */
            get: (
              option?:
                | {
                    headers?: Methods_1spogak['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined,
            ) =>
              fetch<
                Methods_1spogak['get']['resBody'],
                BasicHeaders,
                Methods_1spogak['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * Get All Encounters
             * @returns success response
             */
            $get: (
              option?:
                | {
                    headers?: Methods_1spogak['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined,
            ) =>
              fetch<
                Methods_1spogak['get']['resBody'],
                BasicHeaders,
                Methods_1spogak['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Get All Encounters
         * @returns success response
         */
        get: (
          option?:
            | {
                query?: Methods_1gukmr6['get']['query'] | undefined;
                headers?: Methods_1gukmr6['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined,
        ) =>
          fetch<
            Methods_1gukmr6['get']['resBody'],
            BasicHeaders,
            Methods_1gukmr6['get']['status']
          >(prefix, PATH0, GET, option).json(),
        /**
         * Get All Encounters
         * @returns success response
         */
        $get: (
          option?:
            | {
                query?: Methods_1gukmr6['get']['query'] | undefined;
                headers?: Methods_1gukmr6['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined,
        ) =>
          fetch<
            Methods_1gukmr6['get']['resBody'],
            BasicHeaders,
            Methods_1gukmr6['get']['status']
          >(prefix, PATH0, GET, option)
            .json()
            .then((r) => r.body),
        /**
         * Create Encount entory
         * @param option.body - create encounter request
         * @returns success response
         */
        post: (option: {
          body: Methods_1gukmr6['post']['reqBody'];
          headers?: Methods_1gukmr6['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1gukmr6['post']['resBody'],
            BasicHeaders,
            Methods_1gukmr6['post']['status']
          >(prefix, PATH0, POST, option).json(),
        /**
         * Create Encount entory
         * @param option.body - create encounter request
         * @returns success response
         */
        $post: (option: {
          body: Methods_1gukmr6['post']['reqBody'];
          headers?: Methods_1gukmr6['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1gukmr6['post']['resBody'],
            BasicHeaders,
            Methods_1gukmr6['post']['status']
          >(prefix, PATH0, POST, option)
            .json()
            .then((r) => r.body),
        $path: (
          option?:
            | {
                method?: 'get' | undefined;
                query: Methods_1gukmr6['get']['query'];
              }
            | undefined,
        ) =>
          `${prefix}${PATH0}${
            option && option.query ? `?${dataToURLString(option.query)}` : ''
          }`,
      },
      game: {
        _game_id_number: (val2: number) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            action: {
              /**
               * Game Action
               * @param option.body - create game request
               */
              post: (option: {
                body: Methods_siqaom['post']['reqBody'];
                headers?: Methods_siqaom['post']['reqHeaders'] | undefined;
                config?: T | undefined;
              }) =>
                fetch<void, BasicHeaders, Methods_siqaom['post']['status']>(
                  prefix,
                  `${prefix2}${PATH2}`,
                  POST,
                  option,
                ).send(),
              /**
               * Game Action
               * @param option.body - create game request
               */
              $post: (option: {
                body: Methods_siqaom['post']['reqBody'];
                headers?: Methods_siqaom['post']['reqHeaders'] | undefined;
                config?: T | undefined;
              }) =>
                fetch<void, BasicHeaders, Methods_siqaom['post']['status']>(
                  prefix,
                  `${prefix2}${PATH2}`,
                  POST,
                  option,
                )
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH2}`,
            },
            ready: {
              /**
               * Game Ready
               * @param option.body - create game request
               */
              post: (option: {
                body: Methods_1nv6l43['post']['reqBody'];
                headers?: Methods_1nv6l43['post']['reqHeaders'] | undefined;
                config?: T | undefined;
              }) =>
                fetch<void, BasicHeaders, Methods_1nv6l43['post']['status']>(
                  prefix,
                  `${prefix2}${PATH3}`,
                  POST,
                  option,
                ).send(),
              /**
               * Game Ready
               * @param option.body - create game request
               */
              $post: (option: {
                body: Methods_1nv6l43['post']['reqBody'];
                headers?: Methods_1nv6l43['post']['reqHeaders'] | undefined;
                config?: T | undefined;
              }) =>
                fetch<void, BasicHeaders, Methods_1nv6l43['post']['status']>(
                  prefix,
                  `${prefix2}${PATH3}`,
                  POST,
                  option,
                )
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`,
            },
          };
        },
        _game_id_string: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            /**
             * Join Game
             * @param option.body - create game request
             * @returns success response
             */
            post: (option: {
              body: Methods_1aoson['post']['reqBody'];
              headers?: Methods_1aoson['post']['reqHeaders'] | undefined;
              config?: T | undefined;
            }) =>
              fetch<
                Methods_1aoson['post']['resBody'],
                BasicHeaders,
                Methods_1aoson['post']['status']
              >(prefix, prefix2, POST, option).json(),
            /**
             * Join Game
             * @param option.body - create game request
             * @returns success response
             */
            $post: (option: {
              body: Methods_1aoson['post']['reqBody'];
              headers?: Methods_1aoson['post']['reqHeaders'] | undefined;
              config?: T | undefined;
            }) =>
              fetch<
                Methods_1aoson['post']['resBody'],
                BasicHeaders,
                Methods_1aoson['post']['status']
              >(prefix, prefix2, POST, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Create Game
         * @param option.body - create game request
         * @returns success response
         */
        post: (option: {
          body: Methods_n1pssi['post']['reqBody'];
          headers?: Methods_n1pssi['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods_n1pssi['post']['resBody'],
            BasicHeaders,
            Methods_n1pssi['post']['status']
          >(prefix, PATH1, POST, option).json(),
        /**
         * Create Game
         * @param option.body - create game request
         * @returns success response
         */
        $post: (option: {
          body: Methods_n1pssi['post']['reqBody'];
          headers?: Methods_n1pssi['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods_n1pssi['post']['resBody'],
            BasicHeaders,
            Methods_n1pssi['post']['status']
          >(prefix, PATH1, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      users: {
        _user_id: (val2: string) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            /**
             * Delete User
             * @returns success response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods_11doa8['delete']['resBody'],
                BasicHeaders,
                Methods_11doa8['delete']['status']
              >(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete User
             * @returns success response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods_11doa8['delete']['resBody'],
                BasicHeaders,
                Methods_11doa8['delete']['status']
              >(prefix, prefix2, DELETE, option)
                .json()
                .then((r) => r.body),
            /**
             * Get any User
             * @returns success response
             */
            get: (
              option?:
                | {
                    headers?: Methods_11doa8['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined,
            ) =>
              fetch<
                Methods_11doa8['get']['resBody'],
                BasicHeaders,
                Methods_11doa8['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * Get any User
             * @returns success response
             */
            $get: (
              option?:
                | {
                    headers?: Methods_11doa8['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined,
            ) =>
              fetch<
                Methods_11doa8['get']['resBody'],
                BasicHeaders,
                Methods_11doa8['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Create User
         * @param option.body - create user request
         * @returns success response
         */
        post: (option: {
          body: Methods_odq9yo['post']['reqBody'];
          headers?: Methods_odq9yo['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods_odq9yo['post']['resBody'],
            BasicHeaders,
            Methods_odq9yo['post']['status']
          >(prefix, PATH4, POST, option).json(),
        /**
         * Create User
         * @param option.body - create user request
         * @returns success response
         */
        $post: (option: {
          body: Methods_odq9yo['post']['reqBody'];
          headers?: Methods_odq9yo['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods_odq9yo['post']['resBody'],
            BasicHeaders,
            Methods_odq9yo['post']['status']
          >(prefix, PATH4, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
