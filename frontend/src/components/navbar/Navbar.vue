<template>
  <div class="navbar-container" ref="root">
    <nav class="main-nav">
      <ul>
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/aboutus">About Us</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
// Simple component, no need for complex state
</script>

<style scoped lang="scss">
$blue: #0069A4;
$green: #388528;
$orange: #D85300;
$yellow: #F1B700;

.navbar-container {
  width: 100%;
}

/* Navigation Menu */
.main-nav {
  background: linear-gradient(to right, $blue 0%, $green 33%, $orange 66%, $yellow 100%);
  width: 100%;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  padding: 0;
  cursor: pointer;
  color: white;
  font-weight: 500;
}

.nav-item a {
  display: block;
  padding: 15px 25px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &.router-link-active {
    background-color: rgba(255, 255, 255, 0.3);
    font-weight: 600;
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .main-nav ul {
    flex-direction: column;
  }
  
  .nav-item {
    width: 100%;
    text-align: center;
  }
}
</style>
