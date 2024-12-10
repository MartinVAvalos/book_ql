

<template>
  <router-view />
</template>

<script setup lang="ts">
import { provideClient, Client, cacheExchange, fetchExchange } from '@urql/vue';

const client = new Client({
  // url: import.meta.env.VITE_GRAPHQL_URL,
  url: "http://localhost:5050/v1/graphql",
  fetchOptions: () => ({
    headers: {
      'x-hasura-admin-secret': 'vigilantmuse',
    },
  }),
  exchanges: [cacheExchange, fetchExchange],
});
provideClient(client);
</script>

<style>
  /* Add your styles here */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>


