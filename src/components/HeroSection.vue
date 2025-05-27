<template>
  <section class="bg-slate-800 text-white min-h-screen flex flex-col relative overflow-hidden">
    <!-- Custom Scrollbar Appearance -->
    <div class="absolute right-0 top-0 bottom-0 w-2.5 bg-slate-700 hidden md:block z-0">
      <div class="bg-slate-500 h-20 rounded-full mx-auto mt-4"></div>
    </div>

    <!-- Navigation Bar -->
    <header class="absolute top-0 left-0 right-0 z-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-5 sm:py-6">
          <!-- Logo -->
          <a href="#" class="text-2xl lg:text-3xl font-bold tracking-tight text-white"> Selecao </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex space-x-1 items-center">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-full"
              :class="
                item.name === 'Home'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              "
            >
              {{ item.name }}
              <span v-if="item.isDropdown" class="ml-1 text-xs opacity-70">▾</span>
            </a>
          </nav>

          <!-- Mobile Menu Button (Hamburger) -->
          <div class="lg:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                v-if="!mobileMenuOpen"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Menu -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-slate-800/95 backdrop-blur-sm z-30 pt-20"
    >
      <nav class="flex flex-col items-center space-y-1 mt-8">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="text-lg font-medium transition-colors duration-200 px-4 py-3 rounded-md w-3/4 text-center"
          :class="
            item.name === 'Home'
              ? 'bg-orange-500 text-white'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          "
        >
          {{ item.name }}
          <span v-if="item.isDropdown" class="ml-1 text-xs opacity-70">▾</span>
        </a>
      </nav>
    </div>

    <!-- Hero Content -->
    <div
      class="flex-grow flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-12 sm:pt-32"
    >
      <div class="relative w-full max-w-5xl">
        <!-- Previous Button -->
        <button
          @click="prevSlide"
          aria-label="Previous slide"
          class="absolute left-0 sm:-left-8 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <svg
            class="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <!-- Text Content -->
        <div class="max-w-2xl lg:max-w-3xl mx-auto">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            v-html="activeSlide.title"
          ></h1>
          <p class="text-base sm:text-lg text-slate-300 mb-10 max-w-xl lg:max-w-2xl mx-auto">
            {{ activeSlide.description }}
          </p>
          <a
            href="#"
            class="inline-block bg-transparent border border-orange-500 text-orange-500 rounded-full px-8 py-3 text-sm font-semibold hover:bg-orange-500 hover:text-white"
          >
            Read More
          </a>
        </div>

        <!-- Next Button -->
        <button
          @click="nextSlide"
          aria-label="Next slide"
          class="absolute right-0 sm:-right-8 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <svg
            class="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = ref([
  { name: 'Home', href: '#', isDropdown: false },
  { name: 'About', href: '#', isDropdown: false },
  { name: 'Services', href: '#', isDropdown: false },
  { name: 'Portfolio', href: '#', isDropdown: false },
  { name: 'Team', href: '#', isDropdown: false },
  { name: 'Blog', href: '#', isDropdown: false },
  { name: 'Dropdown', href: '#', isDropdown: true },
  { name: 'Contact', href: '#', isDropdown: false },
])

const slides = ref([
  {
    id: 1,
    title: 'Welcome to Selecao',
    description:
      'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    id: 2,
    title: 'Lorem Ipsum Dolor',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Another Great Feature',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
])

const currentSlideIndex = ref(0)

const activeSlide = computed(() => slides.value[currentSlideIndex.value])

function nextSlide() {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
}

function prevSlide() {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
}
</script>

<style scoped>
/* Scoped styles if needed, but Tailwind utility classes are preferred. */
/* The custom scrollbar is visually created with divs and Tailwind classes. */
</style>
