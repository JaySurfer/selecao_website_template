<template>
  <div class="p-4 sm:p-8 bg-slate-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <!-- Tabs Navigation -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="setActiveTab(tab.id)"
          :class="[
            'flex items-center p-5  shadow-md transition-all duration-200 ease-in-out hover:shadow-xl',
            'min-h-[100px] sm:min-h-[120px] w-full',
            activeTabId === tab.id
              ? 'bg-orange-500 text-white'
              : 'bg-white text-slate-700 border border-slate-200',
          ]"
        >
          <!-- SVG Icon -->
          <div class="mr-3 sm:mr-4 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              :stroke-width="activeTabId === tab.id ? '2' : '1.5'"
              stroke="currentColor"
              class="w-8 h-8 sm:w-10 sm:h-10"
              aria-hidden="true"
              v-html="tab.iconPaths"
            ></svg>
          </div>
          <!-- Text Content -->
          <div class="text-left">
            <span
              v-for="(line, index) in tab.textLines"
              :key="index"
              class="block text-xs sm:text-sm font-medium leading-tight"
            >
              {{ line }}
            </span>
          </div>
        </button>
      </div>

      <!-- Tab Content Area -->
      <div
        v-if="activeTabData && activeTabData.content"
        class="mt-8 md:mt-12 p-6 sm:p-8 bg-white shadow-lg rounded-lg"
      >
        <div class="grid md:grid-cols-5 gap-8 items-start">
          <!-- Text Column (takes 3 parts of the 5) -->
          <div class="md:col-span-3">
            <h2 class="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
              {{ activeTabData.content.title }}
            </h2>
            <p
              v-for="(paragraph, pIndex) in activeTabData.content.paragraphs"
              :key="`p-${pIndex}`"
              class="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base"
              :class="{ 'italic text-slate-500': paragraph.isItalic }"
            >
              {{ paragraph.text }}
            </p>
            <ul
              v-if="activeTabData.content.listItems && activeTabData.content.listItems.length"
              class="space-y-3 mt-6"
            >
              <li
                v-for="(item, lIndex) in activeTabData.content.listItems"
                :key="`l-${lIndex}`"
                class="flex items-start text-slate-600 text-sm sm:text-base"
              >
                <svg
                  class="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <!-- Image Column (takes 2 parts of the 5) -->
          <div class="md:col-span-2 mt-6 md:mt-0">
            <img
              :src="activeTabData.content.imageUrl"
              alt="Content image"
              class="w-full h-auto shadow-md object-cover max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTabId = ref(1) // Set the first tab as active by default

const tabs = ref([
  {
    id: 1,
    iconPaths_original_binoculars: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 10V8a2 2 0 012-2h1m3 0h1a2 2 0 012 2v2m-6 0h6m-6 4H6a2 2 0 00-2 2v2a2 2 0 002 2h1m3 0h1a2 2 0 002-2v-2a2 2 0 00-2-2h-1m-4-2v2m6-2v2M9 12h6"/>
      <circle cx="8.5" cy="10" r="1.5" fill="currentColor" filter="url(#softhighlight)" />
      <circle cx="15.5" cy="10" r="1.5" fill="currentColor" filter="url(#softhighlight)" />
      <defs><filter id="softhighlight"><feGaussianBlur stdDeviation="0.3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    `,
    iconPaths: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 8h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V9a1 1 0 011-1z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 8V6m10 0v2M7 16v2m10 0v-2M10 12h4"/>
    `,
    textLines: ['Modi sit est dela', 'pireda nest'],
    content: {
      title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
      paragraphs: [
        {
          text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isItalic: true,
        },
      ],
      listItems: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', // Replace with your actual image
    },
  },
  {
    id: 2,
    iconPaths: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9 5.25L3 7.5m18 0V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v2.25m18 0v9.75a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25V7.5m0 0h18M12 12.75v6.75" />
    `,
    textLines: ['Unde praesenti', 'mara setra le'],
    content: {
      title: 'Neque exercitationem debitis soluta quos debitis quo mollitia officia est',
      paragraphs: [
        {
          text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isItalic: true,
        },
      ],
      listItems: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with your actual image
    },
  },
  {
    id: 3,
    iconPaths: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
    `,
    textLines: ['Pariatur explica', 'nitro dela'],
    content: {
      title: 'Voluptatibus commodi ut accusamus ea repudiandae aut autem dolor ut assumenda',
      paragraphs: [
        {
          text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        { text: 'Duis aute irure dolor in reprehenderit in voluptate velit.', isItalic: true },
      ],
      listItems: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with your actual image
    },
  },
  {
    id: 4,
    iconPaths: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 10.5A3.5 3.5 0 0110.5 7h3A3.5 3.5 0 0117 10.5v3A3.5 3.5 0 0113.5 17h-3A3.5 3.5 0 017 13.5v-3z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 7V5m0 14v-2m10-12V5m0 14v-2M10.5 7H5m10.5 0H13.5M5 10.5V7m14 3.5V7M5 13.5v3.5m14-3.5v3.5m-8.5 3.5H18.5m-11 0H10.5"/>
    `,
    textLines: ['Nostrum qui dile', 'node'],
    content: {
      title: 'Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum',
      paragraphs: [
        {
          text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isItalic: true,
        },
      ],
      listItems: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replace with your actual image
    },
  },
])

const setActiveTab = (tabId: number) => {
  activeTabId.value = tabId
}

// Computed property to get the data for the active tab
const activeTabData = computed(() => {
  return tabs.value.find((tab) => tab.id === activeTabId.value) || null
})

// Set the first tab's icon to the simpler binoculars
// This was how you had it, ensuring it's correctly applied.
// tabs.value[0].iconPaths = tabs.value[0].iconPaths_simple_binoculars; // This is now the default iconPaths for tab 1.
</script>

<style scoped>
/* You can add component-specific styles here if absolutely needed,
   but prefer Tailwind utility classes. */
</style>
