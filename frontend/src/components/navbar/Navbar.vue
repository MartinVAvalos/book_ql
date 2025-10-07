<template>
  <nav class="main-nav">
    <!-- Library Header Section -->
    <header class="library-header nav-left">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <h1>CERRITOS LIBRARY</h1>
        </div>

        <!-- Hours and Account -->
        <div class="header-right">
          <div class="hours">
            <strong>Hours:</strong> Monday-Friday 11 a.m.-7 p.m. | Saturday-Sunday 11 a.m.-5 p.m.
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle navigation menu">
      <span class="hamburger-line" :class="{ 'active': showMobileMenu }"></span>
      <span class="hamburger-line" :class="{ 'active': showMobileMenu }"></span>
      <span class="hamburger-line" :class="{ 'active': showMobileMenu }"></span>
    </button>

    <!-- Navigation Menu -->
    <ul class="nav-right" :class="{ 'mobile-menu-open': showMobileMenu }">
      <li class="nav-item">
        <router-link to="/projects/library" @click="closeMobileMenu">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects/library/dashboard" @click="closeMobileMenu">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects/library/user" @click="closeMobileMenu">Users</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects/library/aboutus" @click="closeMobileMenu">About Us</router-link>
      </li>
    </ul>
  </nav>
</template><script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>

<style scoped lang="scss">
$blue: #0069A4;
$green: #388528;
$orange: #D85300;
$yellow: #F1B700;

.main-nav {
  display: flex;
  height: 8vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  // background: linear-gradient(to right, $blue 0%, $green 33%, $orange 66%, $yellow 100%);
  width: 100%;
  height: 100%;
  background-color: #F5E9DB;
  position: sticky;
  top: 0;
  z-index: 100;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

/* Library Header Section */
.library-header {
  padding: 15px 20px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  margin-left: auto;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: $blue;
  margin: 3px 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
  position: relative;
  padding-left: 40px;
}

.logo h1:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #ffd700, #ffaa00);
  border-radius: 50%;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.hours {
  font-size: 0.9rem;
}

/* Navigation Menu */

.nav-item {
  padding: 0;
  cursor: pointer;
  font-weight: 500;
  cursor: pointer;
}

.nav-item a {
  display: inline-block;
  margin: 0 5px;
  padding: 8px 12px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  
  &.router-link-active {
    background-color: rgb(255, 255, 255);
    font-weight: 500;
    text-shadow: 0.5px 0 0 currentColor; /* Simulate bold without changing width */
  }
}

/* Responsive styles */
@media (max-width: 1200px) {
  .main-nav {
    justify-content: flex-end;
    padding-right: 20px;
  }
  
  .nav-left {
    display: none;
  }
  
  .nav-right {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background-color: #F5E9DB;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 80px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(100%);
  }
  
  .nav-right.mobile-menu-open {
    display: flex;
    transform: translateX(0);
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .nav-item {
    width: 100%;
    margin: 10px 0;
  }
  
  .nav-item a {
    display: block;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 12px 20px;
  }
}

@media (max-width: 1024px) {
  .header-content {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .header-right {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  .hours {
    margin-bottom: 10px;
    font-size: 0.8rem;
  }
  
  .nav-right {
    width: 100%;
  }
}
</style>
