<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <h1>The <span class="highlight">{{ t('heroTitle.part1') }}</span> <br>{{ t('heroTitle.part2') }}</h1>
    <p class="hero-text">{{ t('heroText') }}</p>
    <div class="hero-buttons">
      <button class="btn btn-green">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
            <path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z"
                  fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <path d="M9 11V7.53601L12 9.26801L15 11L12 12.732L9 14.464V11Z"
                  fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
          </mask>
          <g mask="url(#mask0)">
            <rect x="-1" y="-1" width="24" height="24" fill="currentColor"/>
          </g>
        </svg>
        {{ t('whyVue') }}
      </button>
      <button class="btn btn-icon-right">
        {{ t('getStarted') }}
        <svg width="10" height="10" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.420078 6.58002L12.6701 6.58002L7.42008 1.33002L8.08008 0.580017L14.5801 7.08002L8.08008 13.58L7.42008 12.83L12.6701 7.58002L0.420078 7.58002L0.420078 6.58002Z" fill="#476582"/>
        </svg>
      </button>
      <button class="btn">{{ t('install') }}</button>
      <button class="btn btn-gradient">{{ t('getSecurityUpdates') }}
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 8.5L19 1M19 1H14M19 1V6M19 12V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8" stroke="#476582" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 96px 32px;
}

.hero-text {
  margin: 20px auto 40px;
  font-size: clamp(16px, 2vw, 22px);
  width: min(90%, 960px);
  word-break: normal;
  text-align: center;
  color: gray;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-right: 18px;
  color: var(--button-text-color);
  white-space: nowrap;
  background-color: var(--secondary-bg-color);
}

.btn:last-child {
  margin-right: 0;
}

.btn-green {
  background-color: rgba(66, 184, 131, 1);
  color: light-dark(white, var(--light-text));
}

.btn-green:hover {
  background-color: #2d8867;
}

:root:has(option[id="theme-system"]:checked) .btn:not(.btn-green):hover,
:root:has(option[id="theme-dark"]:checked) .btn:not(.btn-green):hover{
  background-color: rgba(70, 70, 70, 0.66);
}

.btn-gradient {
  background: linear-gradient(var(--button-linear), var(--button-linear)) padding-box,
  linear-gradient(45deg, #42d392, #647eff) border-box;
  border: 2px solid transparent;
}

.btn-icon-right img {
  transition: transform 0.3s ease;
}

.btn-icon-right:hover img {
  transform: translateX(2px);
}

.btn:not(.btn-green):hover {
  background-color: #d5d5d5;
}

.hero {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.highlight {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

.btn-icon-right svg {
  transition: transform 0.3s ease;
}

.btn-icon-right:hover svg {
  transform: translateX(2px);
}

@media (max-width: 811px) {
  .btn:nth-child(4) {
    margin-top: 18px;
  }
}

@media (max-width: 578px) {
  .btn:nth-child(1),
  .btn:nth-child(2),
  .btn:nth-child(3) {
    margin: 18px 18px 0 0;
  }
}
</style>
