
<!-- FetchData.vue -->
<template>
  <div>
    <h1>Users List</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Enter your email"
          required
        />
      </div>

      <button type="submit" :disabled="isSubmitting">Submit</button>
    </form>
    <div v-if="fetching">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>

    <h3 v-if="data && data.Users">List of Users</h3>
    <ul v-if="data && data.Users">
      <li v-for="user in data.Users" :key="user.id">
        {{ user.name }}
        <button @click="handleEdit(user)">Edit</button>
        <button @click="handleDelete(user.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { gql, useMutation } from '@urql/vue';
import { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } from 'gql/api';
import { ref } from 'vue';
const form = ref<{
  id: string | null;
  name: string;
  email: string;
}>({
  id: null,
  name: "",
  email: "",
});
const isSubmitting = ref(false);
const isDeleting = ref(false);
const isEditing = ref(false);

const { data, fetching, error } = useGetUsersQuery();
console.log("data",data);

const addUserMutation = useAddUserMutation();
const deleteUserMutation = useDeleteUserMutation();
const updateUserMutation = useUpdateUserMutation();
const handleSubmit = async () => {
  console.log('submitted');
  // Reset States
  // successMessage.value = "";
  // errorMessage.value = "";
  isSubmitting.value = true;

  // Perform Mutation
  try {
    if (isEditing.value) {
      await updateUserMutation.executeMutation({ 
        id: form.value.id,
        name: form.value.name,
        email: form.value.email
      });
    } else {
      await addUserMutation.executeMutation({ 
        name: form.value.name,
        email: form.value.email
      });
    }
    // const result = await addUserMutation.executeMutation({
    //   name: form.value.name,
    //   email: form.value.email,
    // });
    // console.log('result', result)

    if (error) {
      // throw new Error(error.message);
    }

    if (data) {
      console.log('success');

      // successMessage.value = `User ${data.insert_users_one.name} has been added successfully!`;
      form.value.name = "";
      form.value.email = "";
    }
  } catch (err: any) {
    console.log('error', err);
    // errorMessage.value = err.message || "An unexpected error occurred.";
  } finally {
    isSubmitting.value = false;
  }
};

const handleDelete = async (id: string) => {
  console.log("deleting user", id);
  isDeleting.value = true;

  try {
    const result = await deleteUserMutation.executeMutation({ id });

    if (result.error) {
      throw new Error(result.error.message);
    }

    if (result.data) {
      console.log("User deleted successfully:", result.data);

      // Re-fetch users
    }
  } catch (err: any) {
    console.error("Error while deleting user:", err);
  } finally {
    isDeleting.value = false;
  }
};

const handleEdit = (user: { id: string; name: string; email: string }) => {
  console.log("editing user", user);
  form.value.id = user.id;
  form.value.name = user.name;
  form.value.email = user.email;
  isEditing.value = true; // Set editing mode
};
</script>

<style scoped>
/* Your styles here */
</style>
