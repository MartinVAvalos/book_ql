<template>
  <div class="users-container">
    <div class="header">
      <h1>Users</h1>
      <div class="controls">
        <input
          v-model="q"
          @input="onSearch"
          placeholder="Search users (name or email)"
          class="search"
        />
        <button class="btn btn-info" @click="openModal">Create user</button>
      </div>
    </div>

    <div v-if="fetching" class="status">Loading users...</div>
    <div v-if="error" class="status error">Error loading users: {{ error.message }}</div>

    <div v-if="!fetching && filteredUsers.length === 0" class="status">No users.</div>

    <ul class="user-list">
      <li v-for="u in filteredUsers" :key="u.id" class="user-card">
        <div class="user-list-left">
          <div class="name">{{ u.name || '—' }}</div>
          <div class="email">{{ u.email || '—' }}</div>
          <div class="count">Loans: {{ u.book_loans?.length ?? u.book_loans_aggregate?.aggregate?.count ?? 0 }}</div>
          <div class="count">Purchased: {{ u.user_books?.length ?? 0 }}</div>
        </div>
        <div class="user-list-right">
          <button class="btn btn-warn" @click="confirmDelete(u.id)" :disabled="deleting">Delete</button>
        </div>
      </li>
    </ul>

    <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <h2>Create User</h2>
        <form @submit.prevent="createUser" class="form">
          <label>
            Name
            <input v-model="form.name" required placeholder="Full name" />
          </label>
          <label>
            Email
            <input v-model="form.email" required type="email" placeholder="email@example.com" />
          </label>

          <div class="actions">
            <button type="submit" class="btn btn-info" :disabled="adding">Create</button>
            <button type="button" class="btn btn-warn" @click="closeModal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import * as api from '@/assets/generated/api';

const q = ref('');
const showModal = ref(false);
const form = ref({ name: '', email: '' });

const { data, fetching, error, executeQuery: refetch } = api.useGetUsersQuery({ requestPolicy: 'cache-and-network' });

const filteredUsers = computed(() => {
  const list = data.value?.users ?? [];
  const term = q.value.trim().toLowerCase();
  if (!term) return list;
  return list.filter((u: any) => {
    return (u.name || '').toLowerCase().includes(term) || (u.email || '').toLowerCase().includes(term);
  });
});

// Call generated hooks from the namespace to avoid import interop issues
const addUserMutation = api.useAddUserMutation();
const deleteUserMutation = api.useDeleteUserMutation();
const adding = computed(() => !!addUserMutation.fetching?.value);
const deleting = computed(() => !!deleteUserMutation.fetching?.value);

function onSearch() {
  // client-side filtering handled by computed
}

function openModal() {
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
}

async function createUser() {
  if (!form.value.name || !form.value.email) return;
  try {
    await addUserMutation.executeMutation({
      name: form.value.name,
      email: form.value.email,
    });
    form.value.name = '';
    form.value.email = '';
    showModal.value = false;
    // refetch from network to get newest data
    refetch({ requestPolicy: 'network-only' });
  } catch (err) {
    console.error('Create user failed', err);
  }
}

function confirmDelete(id: string) {
  if (!id) return;
  if (!confirm('Delete user? This cannot be undone.')) return;
  deleteUser(id);
}

async function deleteUser(id: string) {
  try {
    await deleteUserMutation.executeMutation({ id });
    // refetch list
    refetch({ requestPolicy: 'network-only' });
  } catch (err) {
    console.error('Delete user failed', err);
  }
}
</script>

<style scoped lang="scss">
$blue: #0069A4;
$green: #388528;
$orange: #D85300;
$yellow: #F1B700;

.users-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.search {
  padding: 0.5rem 0.6rem;
  min-width: 220px;
}

/* status messages */
.status {
  margin: 1rem 0;
  color: #444;
}

.status.error {
  color: #b00020;
}

.user-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  .user-list-left {
    margin-right: 10px;
  }

  .user-list-right {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
  }
}

.user-card {
  display: flex;
  padding: 0.6rem;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.user-card .name {
  font-weight: 600;
}

.user-card .email {
  color: #666;
  font-size: 0.95rem;
}

.count {
  color: #333;
  font-size: 0.9rem;
}

/* modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal {
  background: #fff;
  padding: 1.1rem 1.25rem;
  border-radius: 8px;
  min-width: 320px;
  max-width: 480px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.form label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.95rem;
}

.form input {
  padding: 0.5rem 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 0.4rem;
}

.btn {
    padding: .5rem 1rem;
    border-radius: .25rem;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-right: 0.5rem;

    &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:last-of-type {
        margin-right: 0;
    }
}
.btn-success {
    border: 2px solid $green;
    background: #fff;

    &:hover {
        background: $green;
        color: #fff;
    }
}
.btn-info {
    border: 2px solid $blue;
    background: #fff;

    &:hover {
        background: $blue;
        color: #fff;
    }
}
.btn-warn {
    border: 2px solid $orange;
    background: #fff;

    &:hover {
        background: $orange;
        color: #fff;
    }
}
</style>