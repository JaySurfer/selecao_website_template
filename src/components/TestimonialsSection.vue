<template>
  <section class="bg-slate-50 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="mb-12 sm:mb-16">
        <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
          TESTIMONIALS
        </p>
        <div class="h-0.5 w-16 bg-orange-500 mb-3"></div>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">WHAT THEY ARE SAYING ABOUT US</h2>
      </div>

      <!-- Testimonials Slider/Display Area -->
      <div class="relative">
        <!-- Current Testimonial Card -->
        <!-- We will display one card at a time, but structure for potential carousel -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonialsToDisplay"
            :key="testimonial.id"
            class="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              :src="testimonial.imageUrl"
              :alt="testimonial.name"
              class="w-24 h-24 rounded-full object-cover mb-5 border-4 border-white shadow-md"
            />
            <h3 class="text-xl font-semibold text-slate-800 mb-0.5">{{ testimonial.name }}</h3>
            <p class="text-sm text-slate-500 mb-3">{{ testimonial.title }}</p>
            <div class="flex text-yellow-400 mb-5">
              <svg
                v-for="i in 5"
                :key="`star-${testimonial.id}-${i}`"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="text-slate-600 italic text-sm leading-relaxed relative px-4">
              <span class="absolute left-0 top-0 -mt-1 text-4xl text-orange-400 opacity-80">“</span>
              {{ testimonial.quote }}
              <span class="absolute right-0 bottom-0 -mb-1 text-4xl text-orange-400 opacity-80"
                >”</span
              >
            </p>
          </div>
        </div>

        <!-- Pagination Dots (for single item display mode) -->
        <div v-if="displayMode === 'single'" class="flex justify-center mt-10 space-x-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="`dot-${testimonial.id}`"
            @click="currentTestimonialIndex = index"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none',
              currentTestimonialIndex === index
                ? 'bg-orange-500'
                : 'bg-slate-300 hover:bg-slate-400',
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Assuming paths like '@/assets/images/testimonial-*.jpg'
import imgJohn from '@/assets/images/testimonials-john.jpg' // Replace with actual path/name
import imgSaul from '@/assets/images/testimonials-saul.jpg' // Replace with actual path/name
import imgSara from '@/assets/images/testimonials-sara.jpg' // Replace with actual path/name

interface Testimonial {
  id: number
  name: string
  title: string
  quote: string
  imageUrl: string
  rating: number // Or just assume 5 stars
}

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'John Larson',
    title: 'Entrepreneur',
    quote:
      'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    imageUrl: imgJohn,
    rating: 5,
  },
  {
    id: 2,
    name: 'Saul Goodman',
    title: 'Ceo & Founder',
    quote:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    imageUrl: imgSaul,
    rating: 5,
  },
  {
    id: 3,
    name: 'Sara Wilsson',
    title: 'Designer',
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
    imageUrl: imgSara,
    rating: 5,
  },
  // Add more testimonials if needed for the slider
  {
    id: 4,
    name: 'Matt Brandon',
    title: 'Freelancer',
    quote:
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem.',
    imageUrl: imgJohn, // Placeholder, use different image
    rating: 5,
  },
])

// --- Slider Logic (Simple implementation) ---
const currentTestimonialIndex = ref(0)
const displayMode = ref<'grid' | 'single'>('grid') // 'grid' to show 3, 'single' for slider

// Determine which testimonials to display
const testimonialsToDisplay = computed(() => {
  if (displayMode.value === 'single') {
    return [testimonials.value[currentTestimonialIndex.value]]
  }
  // For grid display, show the first 3 or adjust as needed.
  // The provided image shows 3 testimonials in a row.
  // If currentTestimonialIndex is used for a 'grid' carousel later, this logic would change.
  return testimonials.value.slice(0, 3)
})

// If you want a truly sliding carousel with a single item visible,
// you would set displayMode to 'single' initially
// and use currentTestimonialIndex to select the item.
// For now, 'grid' shows the 3-item layout.
// Example: To enable single item slider mode by default:
// const displayMode = ref<'grid' | 'single'>('single');

// Optional: Auto-slide functionality
// let slideInterval: number | undefined = undefined;
// onMounted(() => {
//   if (displayMode.value === 'single') {
//     slideInterval = setInterval(() => {
//       currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
//     }, 5000); // Change slide every 5 seconds
//   }
// });
// onUnmounted(() => {
//   if (slideInterval) {
//     clearInterval(slideInterval);
//   }
// });
</script>

<style scoped>
/* No component-specific styles strictly needed, Tailwind handles it.
   You could add custom transitions for the card appearance if using a single-display slider. */
</style>
