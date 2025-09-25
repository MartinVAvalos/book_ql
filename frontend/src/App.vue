<template>
  <div class="app-container">
    <Navbar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue';
import { provideClient, Client, cacheExchange, fetchExchange } from '@urql/vue';

const client = new Client({
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
  
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff !important;
  }
  
  .main-content {
    flex: 1;
    padding-top: 0;
  }
</style>

