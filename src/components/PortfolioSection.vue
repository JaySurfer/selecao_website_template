<template>
  <section class="py-16 sm:py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="mb-12 sm:mb-16">
        <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
          PORTFOLIO
        </p>
        <div class="h-0.5 w-16 bg-orange-500 mb-3"></div>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">WHAT WE'VE DONE</h2>
      </div>

      <!-- Filter Buttons -->
      <div class="flex justify-center items-center space-x-2 sm:space-x-3 mb-10 sm:mb-12">
        <button
          v-for="filterOption in filters"
          :key="filterOption"
          @click="setActiveFilter(filterOption)"
          :class="[
            'px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-200 focus:outline-none',
            activeFilter === filterOption
              ? 'bg-orange-500 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800',
          ]"
        >
          {{ filterOption }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
        <div
          v-for="item in filteredPortfolioItems"
          :key="item.id"
          :class="[
            'group relative rounded-lg overflow-hidden shadow-md cursor-pointer',
            getItemSpanClass(item.id, item.layoutHint), // Pass ID and layoutHint
            getItemAspectRatioClass(item.id, item.layoutHint), // For aspect ratio
          ]"
        >
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 ease-in-out flex flex-col items-center justify-end p-4 sm:p-6 text-center"
          >
            <div
              class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
            >
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-1">{{ item.title }}</h3>
              <p class="text-xs sm:text-sm text-slate-200 mb-3">{{ item.categoryText }}</p>
              <div class="flex space-x-3">
                <a
                  :href="item.lightboxUrl || item.imageUrl"
                  target="_blank"
                  class="w-8 h-8 sm:w-9 sm:h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </a>
                <a
                  :href="item.detailsUrl || '#'"
                  target="_blank"
                  class="w-8 h-8 sm:w-9 sm:h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 0 6.624l-5.173 5.173a4.5 4.5 0 0 1-6.363-6.363l.507-.507M10.81 15.312a4.5 4.5 0 0 1 0-6.624l5.173-5.173a4.5 4.5 0 0 1 6.363 6.363l-.507.507"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import imgCurology from '@/assets/images/masonry-portfolio-1.jpg'
import imgTeaHoney from '@/assets/images/coffee-portfolio-2.jpg'
import imgSucculent from '@/assets/images/cactus-portfolio-3.jpg'
import imgStool from '@/assets/images/chair-portfolio-6.jpg'
import imgLamp from '@/assets/images/lamp-portfolio-5.jpg'
import imgWatch from '@/assets/images/watch-portfolio.jpg'
import imgLens from '@/assets/images/camera-lense-portfolio-7.jpg' // Using lens for both, update if needed
import imgGlass from '@/assets/images/glass-portfolio-8.jpg'

interface PortfolioItem {
  id: number
  imageUrl: string
  title: string
  category: string
  categoryText: string
  detailsUrl?: string
  lightboxUrl?: string
  layoutHint?: 'wide' | 'tall' | 'normal' | 'short-wide' // Added 'short-wide'
}

const filters = ref(['All', 'App', 'Card', 'Web'])
const activeFilter = ref('All')

// Order items carefully for the "All" view to attempt the desired flow
const portfolioItems = ref<PortfolioItem[]>([
  {
    id: 1,
    imageUrl: imgCurology,
    title: 'Curology',
    category: 'Product',
    categoryText: 'Skincare',
    layoutHint: 'wide',
  },
  {
    id: 2,
    imageUrl: imgTeaHoney,
    title: 'Tea & Honey',
    category: 'App',
    categoryText: 'Lifestyle',
    layoutHint: 'normal',
  },
  // Tall items next
  {
    id: 4,
    imageUrl: imgStool,
    title: 'Minimal Stool',
    category: 'Branding',
    categoryText: 'Furniture',
    layoutHint: 'tall',
  }, // Stool first of the talls
  {
    id: 5,
    imageUrl: imgLamp,
    title: 'Desk Lamp',
    category: 'Product',
    categoryText: 'Lighting',
    layoutHint: 'tall',
  }, // Lamp next
  // Normal items that would appear next to the tall ones
  {
    id: 3,
    imageUrl: imgSucculent,
    title: 'Succulent',
    category: 'Web',
    categoryText: 'Decor',
    layoutHint: 'normal',
  },
  {
    id: 7,
    imageUrl: imgSunglasses,
    title: 'Sunglasses',
    category: 'App',
    categoryText: 'Fashion',
    layoutHint: 'normal',
  }, // Placeholder for sunglasses
  // Watch - might be shorter, wider
  {
    id: 6,
    imageUrl: imgWatch,
    title: 'Classic Watch',
    category: 'Branding',
    categoryText: 'Accessory',
    layoutHint: 'short-wide',
  },
  // Remaining normal items
  {
    id: 8,
    imageUrl: imgLens,
    title: 'Camera Lens',
    category: 'Web',
    categoryText: 'Photography',
    layoutHint: 'normal',
  },
  {
    id: 9,
    imageUrl: imgGlass,
    title: 'Artisan Drink',
    category: 'Product',
    categoryText: 'Beverage',
    layoutHint: 'normal',
  },
])

function mapCategoryToFilter(itemCategory: string) {
  if (itemCategory === 'Product') return 'App'
  if (itemCategory === 'Branding') return 'Card'
  return itemCategory
}

const filteredPortfolioItems = computed(() => {
  if (activeFilter.value === 'All') {
    return portfolioItems.value // Use the predefined order for "All"
  }
  // For other filters, you might want a different sorting or just the filtered list
  return portfolioItems.value.filter(
    (item) => mapCategoryToFilter(item.category).toLowerCase() === activeFilter.value.toLowerCase(),
  )
})

function setActiveFilter(filter: string) {
  activeFilter.value = filter
}

function getItemSpanClass(itemId: number, hint?: PortfolioItem['layoutHint']): string {
  // Default spans for mobile and small screens
  let classes = 'col-span-1 sm:col-span-1 ' // sm:col-span-1 makes it 2 per row on sm with grid-cols-2

  if (activeFilter.value !== 'All') {
    classes += 'lg:col-span-2' // 3 items per row on lg:grid-cols-6
  } else {
    // 'All' view spans based on lg:grid-cols-6
    // This logic needs to be carefully crafted based on desired item order and spans
    switch (itemId) {
      case 1: // Curology
        classes += 'lg:col-span-4'
        break
      case 2: // Tea
        classes += 'lg:col-span-2'
        break
      // For items in the "second row" conceptually
      case 4: // Stool
      case 5: // Lamp
      case 3: // Succulent (placed after tall items in data for flow)
        classes += 'lg:col-span-2'
        break
      // For items in "third row"
      case 7: // Sunglasses
      case 6: // Watch
      case 8: // Lens
        classes += 'lg:col-span-2'
        break
      case 9: // Glass
        classes += 'lg:col-span-2'
        break
      default:
        classes += 'lg:col-span-2'
    }
  }
  return classes
}

function getItemAspectRatioClass(itemId: number, hint?: PortfolioItem['layoutHint']): string {
  if (activeFilter.value === 'All') {
    if (hint === 'tall') {
      return 'aspect-[2/3] sm:aspect-[2/3]' // Taller
    }
    if (hint === 'short-wide' || itemId === 6 /* Watch */) {
      return 'aspect-[16/9] sm:aspect-[16/9]' // Wider, shorter
    }
    if (hint === 'wide' || itemId === 1 /* Curology */) {
      return 'aspect-[16/9] sm:aspect-[16/9]' // Or aspect-[2/1] if very wide
    }
  }
  return 'aspect-[3/2] sm:aspect-[3/2]' // Default aspect ratio
}
</script>

<style scoped>
/* Ensure your Tailwind JIT mode supports aspect ratio utilities like aspect-[3/2]
   or use the @tailwindcss/aspect-ratio plugin. */
</style>
