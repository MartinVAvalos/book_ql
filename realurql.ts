import { useLogger } from "./composables/logger";
import type { ClientOptions } from "@urql/core";
import {
  createClient,
  dedupExchange,
  cacheExchange,
  mapExchange,
  fetchExchange,
  gql,
  subscriptionExchange
} from "@urql/vue";
import { cache } from "./composables/exchanges/graphcache";
import { devtoolsExchange } from "@urql/devtools";
import { urqlAuthConfig } from "./composables/exchanges/auth";
import { mutationLimiterExchange } from "./composables/exchanges/mutationLimiter";
import { offlineRetryExchange } from "./composables/exchanges/offlineRetryExchange";
import { onError } from "./composables/exchanges/onError";
// import type { OperationResult } from "graphql-ws";
// import { pipe, subscribe } from "wonka";
// import { ref } from "vue";
import { preventOfflineQueriesExchange } from "./composables/exchanges/preventOfflineQueries";
import {
  subscriptionClient,
  subscriptionClientPublic
} from "./composables/exchanges/subscription";
import { unwrapRefsExchange } from "./composables/exchanges/unwrapRefs";
import type { Client } from "@urql/vue";
import type { CustomUserClaims } from "@okta/okta-auth-js";
import { authExchange } from "@urql/exchange-auth";

const { info, error } = useLogger("URQL CLIENT");

// Config for the main Urql client that is `provided` down through the app.
// all queries, mutations, subscriptions use the main Urql client, unless
// otherwise specified. The main Urql client is created in App.vue.

export const mainUrqlConfig = (): ClientOptions => {
  return {
    url: window.config.GRAPHQL_URL,
    requestPolicy: "cache-and-network",
    fetchOptions: { headers: { "content-type": "application/json" } },
    exchanges: [
      preventOfflineQueriesExchange,
      unwrapRefsExchange,
      devtoolsExchange,
      dedupExchange,
      cache,
      offlineRetryExchange,
      mutationLimiterExchange,
      mapExchange({ onError }),
      authExchange(urqlAuthConfig),
      subscriptionExchange({
        forwardSubscription: operation => ({
          subscribe: sink => ({
            unsubscribe: subscriptionClient().subscribe(operation, sink)
          })
        })
      }),
      fetchExchange
    ]
  };
};

// This creates a client without authorization headers to be used on
// tables with 'public' permissions. Currently unimplemented

export function createPublicClient(): Client {
  const client = createClient({
    url: window.config.GRAPHQL_URL,
    requestPolicy: "cache-and-network",
    fetchOptions: { headers: { "content-type": "application/json" } },
    exchanges: [
      preventOfflineQueriesExchange,
      unwrapRefsExchange,
      devtoolsExchange,
      dedupExchange,
      cache,
      offlineRetryExchange,
      mutationLimiterExchange,
      mapExchange({ onError }),
      subscriptionExchange({
        forwardSubscription: operation => ({
          subscribe: sink => ({
            unsubscribe: subscriptionClientPublic().subscribe(operation, sink)
          })
        })
      }),
      fetchExchange
    ]
  });
  return client;
}

// This creates a client that is used for a one-off user upsert in AuthProvider.vue
export function createUpsertClient(token?: string | undefined): Client {
  const client = createClient({
    url: window.config.GRAPHQL_URL,
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    exchanges: [
      dedupExchange,
      cacheExchange,
      mapExchange({ onError }),
      authExchange(urqlAuthConfig),
      fetchExchange
    ]
  });
  return client;
}

// Create subscription to public 'status' view in Hasura, meant to be used as a health check.
// Currently unimplemented.
// export function statusSubscription(client: Client): any {
//   const status = ref<OperationResult>();

//   const subscription = pipe(
//     client.subscription(
//       gql`
//         subscription status {
//           status {
//             status
//           }
//         }
//       `
//     ),
//     subscribe(result => {
//       status.value = result.data;
//     })
//   );

//   return status.value;
// }

// User upsert mutation, used in AuthProvider.vue to upsert user info on login.
export async function upsertUser(
  client: Client,
  user: CustomUserClaims
): Promise<void> {
  const data = await client
    .mutation(
      gql`
        mutation UserUpsert($user: users_insert_input!) {
          upsert: insert_users_one(
            object: $user
            on_conflict: {
              constraint: users_pkey
              update_columns: [email, username, display_name, hal_identifier]
            }
          ) {
            display_name
            email
          }
        }
      `,
      {
        user: {
          email: user.email,
          username: user.preferred_username,
          display_name: user.display_name,
          hal_identifier: user.hal_identifier
        }
      }
    )
    .toPromise();

  if (data.error) {
    info("UPSERT error", data.error.message);
  } else {
    info("UPSERT", data);
  }
}
