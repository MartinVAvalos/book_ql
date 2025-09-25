<template>
  <div class="library-container">
    <!-- Announcement Banner -->
    <transition name="slide-fade">
      <div v-if="showAnnouncement" class="announcement-banner">
      </div>
    </transition>

    <!-- Header Section -->
    <header class="library-header">
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

    <div class="main-content">
      <div class="search-container">
        <form @submit.prevent="handleSearch">
          <div class="search-input-group">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Book Search" 
              class="search-input"
            />
            <button type="submit" class="search-btn">🔍</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="library-footer">
      <div class="footer-container">
        <div class="footer-column">
          <h3>Contact Us</h3>
          <p class="library-name">Cerritos Library</p>
          <p>18025 Bloomfield Avenue</p>
          <p>Cerritos, CA 90703, United States</p>
          <a href="tel:5629161350" class="footer-link">(562) 916-1350</a>
          <a href="https://forms.cerritos.gov/Cerritos-Library/Contact-Us" class="footer-link">Contact Form</a>
          
          <div class="library-hours">
            <h4>Hours:</h4>
            <p>Monday-Friday: 11 a.m.-7 p.m.</p>
            <p>Saturday-Sunday: 11 a.m.-5 p.m.</p>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Resources</h3>
          <div class="footer-links">
            <p>
              <a href="https://library.cerritos.gov/about-the-library/accessibility/" title="Accessibility" class="footer-link">Accessibility</a>
              <a rel="noopener" href="https://www.governmentjobs.com/careers/cityofcerritos" target="_blank" title="Careers" data-anchor="?" class="footer-link">Careers</a>
              <a rel="noopener" href="http://www.cerritos.us/" target="_blank" title="City of Cerritos" class="footer-link">City of Cerritos</a>
              <a href="https://library.cerritos.gov/about-the-library/policies/privacy-policy/" title="Privacy Policy" class="footer-link">Privacy Policy</a>
              <a rel="noopener" href="https://secure.rec1.com/CA/cerritos-ca/catalog" target="_blank" title="Register for classes &amp; programs" class="footer-link">Register for Classes &amp; Programs</a>
              <a href="https://library.cerritos.gov/sitemap/" title="Sitemap" class="footer-link">Sitemap</a>
            </p>
          </div>
        </div>
        
        <div class="footer-column social-media-column">
          <div class="social-icons">
            <a href="https://www.facebook.com/CityCerritos" target="_blank" rel="noopener noreferrer" class="social-icon facebook"><span class="sr-only">Facebook</span></a>
            <a href="https://www.instagram.com/city_of_cerritos/" target="_blank" rel="noopener noreferrer" class="social-icon instagram"><span class="sr-only">Instagram</span></a>
            <a href="https://www.linkedin.com/company/cityofcerritos/" target="_blank" rel="noopener noreferrer" class="social-icon linkedin"><span class="sr-only">LinkedIn</span></a>
            <a href="https://www.youtube.com/channel/UCqf-EP2kvB_KXS3NI3tM6EA/videos?view=0&sort=dd&shelf_id=0" target="_blank" rel="noopener noreferrer" class="social-icon youtube"><span class="sr-only">YouTube</span></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FCityCerritos" target="_blank" rel="noopener noreferrer" class="social-icon twitter"><span class="sr-only">Twitter</span></a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>© 2025 Cerritos Library</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const searchOption = ref('catalog')

const handleSearch = () => {
  if (searchOption.value === 'catalog' && searchQuery.value.trim()) {
    // Navigate to dashboard with search query
    router.push({
      path: '/dashboard',
      query: { q: searchQuery.value }
    })
  } else {
    console.log('Searching for:', searchQuery.value, 'in', searchOption.value)
  }
}
</script>

<style scoped>
.library-container {
  font-family: Arial, sans-serif;
  max-width: 100%;
  margin: 0 auto;
  color: #333;
}

/* Announcement Banner */
.announcement-banner {
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Transition effects for announcement banner */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.close-btn {
  position: absolute;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Header Section */
.library-header {
  padding: 15px 20px;
  background-color: #f5f5f5;
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

/* Search Bar */
.search-container {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-container form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.search-input {
  flex-grow: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.search-input-group {
  display: flex;
  width: 100%;
}

.search-btn {
  background: #0080a9;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 20px;
  transition: background-color 0.2s;
}

.search-btn:hover {
  background: #00648a;
}

.search-options {
  display: flex;
  gap: 15px;
  margin-top: 15px;
  flex-wrap: wrap;
}

/* Main Content Area */
.main-content {
  display: flex;
  flex-direction: column;
  background-image: url("../../../public/homepage-banner-2.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 80px 0;
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
  
  .search-container {
    max-width: 100%;
  }
  
  .announcement-banner p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .announcement-banner {
    padding: 8px 12px;
  }
  
  .search-options {
    flex-direction: column;
    gap: 5px;
  }
}

/* Footer Styles */
.library-footer {
  background-color: #e9eff5;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
  padding: 0 15px;
}

.footer-column h3 {
  font-size: 22px;
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: bold;
}

.footer-column p {
  margin: 5px 0;
  line-height: 1.5;
  color: #333;
}

.library-name {
  font-weight: bold;
}

.library-hours {
  margin-top: 20px;
}

.library-hours h4 {
  font-weight: bold;
  margin-bottom: 5px;
}

.footer-links {
  padding: 0;
  margin: 0;
}

.footer-link {
  color: #0080a9;
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1.8;
  margin-right: 15px;
}

.footer-link:hover {
  text-decoration: underline;
  color: #00648a;
}

.social-media-column {
  display: flex;
  justify-content: flex-end;
}

.social-icons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s;
}

.social-icon:hover {
  transform: scale(1.1);
}

.facebook {
  background-color: #1877F2;
  position: relative;
}

.facebook::before {
  content: "f";
  font-weight: bold;
  font-size: 28px;
}

.instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  position: relative;
}

.instagram::before {
  content: "📷";
  font-size: 20px;
}

.linkedin {
  background-color: #0077B5;
  position: relative;
}

.linkedin::before {
  content: "in";
  font-weight: bold;
  font-size: 20px;
}

.youtube {
  background-color: #FF0000;
  position: relative;
}

.youtube::before {
  content: "▶";
  font-size: 20px;
}

.twitter {
  background-color: #000000;
  position: relative;
}

.twitter::before {
  content: "𝕏";
  font-size: 20px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.copyright {
  border-top: 1px solid #ccc;
  padding-top: 20px;
  margin-top: 20px;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
}

.copyright p {
  color: #333;
  font-size: 14px;
}

/* Footer Responsive Styles */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-column {
    width: 100%;
    padding: 0;
  }
  
  .social-media-column {
    justify-content: flex-start;
  }
}
</style>
