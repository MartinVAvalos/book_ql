<script setup lang="ts">
const TEST_QUERY = `
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;
</script>

<template>
  <div>Test Query Component</div>
</template>