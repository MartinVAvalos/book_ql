
<!-- FetchData.vue -->
<template>
  <div>
    <h1>Users List</h1>
    <div v-if="fetching">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <ul v-if="data && data.Users">
      <li v-for="user in data.Users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useGetUsersQuery } from '@/assets/generated/api';

// import { ref } from 'vue';
// import { useGetUsersQuery } from "gql/api";
// import { useGetUsersQuery } from "@/assets/generated/api";
// frontend/src/assets/generated/api.ts
// frontend/src/gql/graphql.ts

const { data, fetching, error } = useGetUsersQuery();
console.log("data",data);

</script>

<style scoped>
/* Your styles here */
</style>


<!-- 
 <template>
    <h1 @click="getPost">Hello world 2</h1>
    <p>Lorem ipsum NICE</p>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios';
// import { onMounted } from 'vue';

  // onMounted(() => {
  //   getPost().then((data: any) => {
  //     console.log(data);
  //   });
  // });

  async function getPost() {
    const body:any = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log("body.data",body.data);
    return body.data;
  }
  </script> -->