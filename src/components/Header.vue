<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
function toggleLang() {
  locale.value = locale.value === 'en' ? 'it' : 'en'
}

const isPopupOpen = ref(false)

function togglePopup() {
  isPopupOpen.value = !isPopupOpen.value
}

const isDocsOpen = ref(false)
const isEcosystemOpen = ref(false)
const isAboutOpen = ref(false)
const isExpertsOpen = ref(false)

const selectedTheme = ref('system')
onMounted(() => {
  const savedTheme = localStorage.getItem('preferred-theme')
  if(savedTheme){
    selectedTheme.value = savedTheme
  }
})
function saveTheme() {
  localStorage.setItem('preferred-theme', selectedTheme.value)
}
</script>

<template>
  <header>
    <div class="header">
      <div class="header-left">
        <div class="header-logo">
          <svg width="256" height="22" viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_112_48)">
              <path d="M204.8 0H256L128 220.8L0 0H97.92L128 51.2L157.44 0H204.8Z" fill="#41B883"/>
              <path d="M0 0L128 220.8L256 0H204.8L128 132.48L50.56 0H0Z" fill="#41B883"/>
              <path d="M50.5596 0L128 133.12L204.8 0H157.44L128 51.2L97.9196 0H50.5596Z" fill="#35495E"/>
            </g>
            <defs>
              <clipPath id="clip0_112_48">
                <rect width="256" height="221" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Vue.js</span>
        </div>
        <button class="search-button">
          <img class="search-button-pic" src="./icons/search.svg" alt="search" />
          <span class="search-text">{{ t('searchText') }}</span>
          <span class="search-btn-shortcut">⌘ K</span>
        </button>
      </div>
      <div class="navigation">
        <nav>
          <ul class="nav-menu">
            <li class="dropdown">
              <a href="#">{{ t('nav.docs') }}</a>
              <svg class="nav-icon" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2"/>
              </svg>
              <ul class="dropdown-menu">
                <li><a href="#">Guide</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Quick start</a></li>
                <li><a href="#">Glossary</a></li>
                <li><a href="#">Error reference</a></li>
                <li><a href="#">Vue 2 docs</a></li>
                <li><a href="#">Migration from Vue 2</a></li>
              </ul>
            </li>
            <li><a href="#">{{ t('nav.api') }}</a></li>
            <li><a href="#">{{ t('nav.playground') }}</a></li>
            <li class="dropdown">
              <a href="#">{{ t('nav.ecosystem') }}</a>
              <svg class="nav-icon" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2"/>
              </svg>
              <ul class="dropdown-menu">
                <li><strong>RESOURCES</strong></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">UI components</a></li>
                <li><a href="#">Certification</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">T-Shirt shop</a></li>

                <li><strong>OFFICIAL LIBRARIES</strong></li>
                <li><a href="#">Vue Router</a></li>
                <li><a href="#">Pinia</a></li>
                <li><a href="#">Tooling Guide</a></li>

                <li><strong>VIDEO COURSES</strong></li>
                <li><a href="#">Vue Mastery</a></li>
                <li><a href="#">Vue School</a></li>

                <li><strong>HELP</strong></li>
                <li><a href="#">Discord chat</a></li>
                <li><a href="#">GitHub discussions</a></li>

                <li><a href="#">DEV community</a></li>

                <li><strong>NEWS</strong></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Newsletters</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">{{ t('nav.about') }}</a>
              <svg class="nav-icon" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2"/>
              </svg>
              <ul class="dropdown-menu">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Releases</a></li>
                <li><a href="#">Community guide</a></li>
                <li><a href="#">Code of conduct</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">The documentary</a></li>
              </ul>
            </li>
            <li><a href="#">{{ t('nav.sponsor') }}</a></li>
            <li class="dropdown">
              <a href="#">{{ t('nav.experts') }}</a>
              <span class="new-p">NEW</span>
              <svg class="nav-icon" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2"/>
              </svg>
              <ul class="dropdown-menu">
                <li><a href="#">Partners</a></li>
                <li><a href="#">Developers</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <button class="btn header-translation-btn" @click="toggleLang">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path
              d="M9.515 17.23L13.873 6.23H14.896L19.254 17.23H18.173L16.983 14.18H11.785L10.596 17.23H9.515ZM1.635 14.346L0.927 13.638L5.823 8.722C5.25233 8.13867 4.68467 7.42067 4.12 6.568C3.55533 5.71533 3.137 4.936 2.865 4.23H3.945C4.189 4.79 4.558 5.43333 5.052 6.16C5.54533 6.88733 6.03833 7.50567 6.531 8.015C7.401 7.131 8.17367 6.16133 8.849 5.106C9.52367 4.05 9.97233 3.09133 10.195 2.23H0V1.23H6.115V0H7.115V1.23H13.231V2.23H11.234C10.9353 3.27667 10.4263 4.39133 9.707 5.574C8.98767 6.75733 8.16467 7.81067 7.238 8.734L9.773 11.338L9.388 12.368L6.531 9.436L1.635 14.346ZM12.123 13.276H16.646L14.384 7.465L12.123 13.276Z"
              fill="currentColor" />
          </svg>
        </button>

        <select id="theme-select" @change="saveTheme">
          <option id="theme-system" value="system">System</option>
          <option id="theme-light" value="light">Light</option>
          <option id="theme-dark" value="dark">Dark</option>
        </select>

        <div class="buttons">
          <button class="btn header-btns">
            <img src="./icons/gith.svg" alt="github" />
          </button>
          <button class="btn header-btns">
            <img src="./icons/x.svg" alt="twitter" />
          </button>
          <button class="btn header-btns">
            <img src="./icons/disc.svg" alt="discord" />
          </button>
        </div>
      </div>
      <button class="menu-btn" @click="togglePopup">
        <img class="menu-img" src="./icons/menu-sm.svg" alt="menu toggle button"/>
      </button>

      <div class="popup-menu" v-show="isPopupOpen">
        <div class="popup-content">
          <nav>
            <ul class="nav-menu">
              <li class="dropdown">
                <div class="dropdown-header" @click="isDocsOpen = !isDocsOpen">
                  <a href="#" >Docs</a>
                  <button class="popup-open-menu">&times;</button>
                </div>
                <ul class="popup-dropdown-menu" :class="{ open: isDocsOpen }">
                  <li><a href="#">Guide</a></li>
                  <li><a href="#">Tutorial</a></li>
                  <li><a href="#">Examples</a></li>
                  <li><a href="#">Quick start</a></li>
                  <li><a href="#">Glossary</a></li>
                  <li><a href="#">Error reference</a></li>
                  <li><a href="#">Vue 2 docs</a></li>
                  <li><a href="#">Migration from Vue 2</a></li>
                </ul>
              </li>

              <li><a href="#">API</a></li>
              <li><a href="#">Playground</a></li>

              <li class="dropdown">
                <div class="dropdown-header" @click="isEcosystemOpen = !isEcosystemOpen">
                  <a href="#">Ecosystem</a>
                  <button class="popup-open-menu">&times;</button>
                </div>
                <ul class="popup-dropdown-menu" :class="{ open: isEcosystemOpen }">
                  <li><strong>RESOURCES</strong></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Developers</a></li>
                  <li><a href="#">Themes</a></li>
                  <li><a href="#">UI components</a></li>
                  <li><a href="#">Certification</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">T-Shirt shop</a></li>

                  <li><strong>OFFICIAL LIBRARIES</strong></li>
                  <li><a href="#">Vue Router</a></li>
                  <li><a href="#">Pinia</a></li>
                  <li><a href="#">Tooling Guide</a></li>

                  <li><strong>VIDEO COURSES</strong></li>
                  <li><a href="#">Vue Mastery</a></li>
                  <li><a href="#">Vue School</a></li>

                  <li><strong>HELP</strong></li>
                  <li><a href="#">Discord chat</a></li>
                  <li><a href="#">GitHub discussions</a></li>
                  <li><a href="#">DEV community</a></li>

                  <li><strong>NEWS</strong></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Newsletters</a></li>
                </ul>
              </li>

              <li class="dropdown">
                <div class="dropdown-header" @click="isAboutOpen =! isAboutOpen">
                  <a href="#" >About</a>
                  <button class="popup-open-menu">&times;</button>
                </div>
                <ul class="popup-dropdown-menu" :class="{ open: isAboutOpen }">
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Releases</a></li>
                  <li><a href="#">Community guide</a></li>
                  <li><a href="#">Code of conduct</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">The documentary</a></li>
                </ul>
              </li>

              <li><a href="#" >Sponsor</a></li>

              <li class="dropdown">
                <div class="dropdown-header" @click="isExpertsOpen =! isExpertsOpen">
                  <a href="#" >Experts</a>
                  <button class="popup-open-menu">&times;</button>
                </div>
                <ul class="popup-dropdown-menu" :class="{ open: isExpertsOpen }">
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Developers</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="popup-bg">
            <span class="translations">Translations</span>
            <ul class="translation-list">
              <li>
                <a href="#">Italiano</a>
                <img src="./icons/gith.svg" alt="github">
              </li>
              <li>
                <a href="#">English</a>
                <img src="./icons/gith.svg" alt="github">
              </li>
            </ul>
            <span>Help us translate!</span>
          </div>
          <div class="buttons">
            <button class="btn header-btns">
              <img src="./icons/gith.svg" alt="github" />
            </button>
            <button class="btn header-btns">
              <img src="./icons/x.svg" alt="twitter" />
            </button>
            <button class="btn header-btns">
              <img src="./icons/disc.svg" alt="discord" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: min(100%, 1500px);
  margin: 0 auto;
  padding: 15px 32px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.header-left {
  display: flex;
  justify-content: flex-start;
}

.header-logo {
  display: flex;
  align-items: center;
}

.header-logo svg {
  width: 24px;
  margin-right: 10px;
}
.search-button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #8d8d8d;
  transition: color 0.3s ease-in-out;
}
.search-button img {
  width: 15px;
  margin-right: 10px;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
}
.search-btn-shortcut {
  display: flex;
  margin-left: 10px;
  color: #8d8d8d;
  padding: 2px 6px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  white-space: nowrap;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding: 0 10px;
}
.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-menu li {
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  cursor:pointer;
  color: var(--header-buttons);
}
.nav-menu li:last-child {
  margin-right: 0;
}
.nav-menu a {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  color: var(--header-buttons);
}

.new-p {
  background-color: rgba(59, 142, 237, 1);
  color: white;
  padding: 1px 2px;
  border-radius: 6px;
  font-size: 10px;
  margin-left: 6px;
}

.header-btns {
  width: 20px;
  opacity: 0.7;
  border: none;
  background: none;
  cursor: pointer;
}

.header-btns img {
  width: 20px;
  height: 20px;
}

.nav-icon {
  width: 14px;
  padding-left: 4px;
  color: var(--header-buttons);
}

.header-translation-btn {
  background: none;
  border: none;
  cursor: pointer;
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  margin: 0 8px;
  padding: 0 10px;
  color: light-dark(black, #d5d5d5);
}
.dropdown {
  position: relative;
}

.dropdown-menu {
  padding: 0.5rem 0;
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--bg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  list-style: none;
  transition: opacity .25s, visibility .25s;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li {
  padding: 0 18px;
  white-space: nowrap;
  line-height: 28px;
  width: 100%;
  color: rgba(180, 180, 180, 0.692);
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}

.dropdown-menu li a {
  font-size: 13px;
  display: block;
  width: 100%;
  color: var(--header-buttons);
  text-decoration: none;
}

.dropdown-menu li a:hover {
  color: #4caf50;
}
.search-button:hover .search-btn-shortcut {
  color:  #4caf50;;
  border-color:  #4caf50;;
}
.menu-btn {
  display: none;
  background: none;
  border: none;
}

.popup-menu {
  display: flex;
  position: fixed;
  top: 55px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  z-index: 1000;
  align-items: flex-start;
  justify-content: center;
  padding: 0 32px;
  overflow-y: auto;
}

.popup-content {
  background-color: var(--bg);
  width: 40%;
  position: relative;
  margin: 0;
  padding: 24px 0 96px;
  max-width: 288px;
}

.popup-open-menu {
  transform: rotate(45deg);
  cursor: pointer;
  margin: auto 0 auto auto;
  background: none;
  border: none;
}

.popup-bg {
  border-radius: 8px;
  padding: 12px 14px 12px 16px;
  background-color: var(--table-cell-color);
  color: var(--text-color);
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  margin: 16px auto;
}

.popup-dropdown-menu {
  display: none;
  flex-direction: column;
  box-shadow: none;
  border-radius: 0;
  transition: opacity .25s, visibility .25s;
  margin: 15px auto 15px 15px;
}

.popup-dropdown-menu.open {
  display: flex;
}

.popup-bg li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  padding: 0 0.5rem;
}


@media (max-width: 1024px) {
  ul {
    padding: 0;
  }
  .navigation,
  .search-button {
    display: none;
  }
  .menu-btn{
    display: block;
    width: 16px;

  }
  .nav-menu {
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0;
  }
  .nav-menu li {
    width: 100%;
  }

  .nav-menu > li {
    border-bottom: 1px solid var(--border-color);
    padding: 0.7rem 0;
    margin: 0;
  }
  .translations {
    border-bottom: 1px solid var(--border-color);
    display: inline-block;
    width: 100%;
  }
  .header-btns img {
    width: 16px;
    height: 16px;
  }
  .popup-bg a,
  .popup-bg span:last-of-type {
    color: var(--button-text-color);
  }
  .popup-bg span:last-of-type {
    border-top:  1px solid var(--border-color);
    display: inline-block;
    width: 100%;
  }
  .translation-list {
    padding: 10px 0;
  }
  .dropdown {
    display: flex;
    flex-direction: column;
  }
  .nav-menu li {
    align-items: flex-start;

  }
  .popup-dropdown-menu li a {
    font-size: 13px;
    line-height: 32px;
  }
  .popup-dropdown-menu li strong {
    line-height: 32px;
    font-size: 11px;
    font-weight: 700;
    color: lightgray;
    text-transform: uppercase;
    transition: color .25s;
  }
}
</style>
