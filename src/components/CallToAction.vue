<template>
  <section class="bg-slate-800 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <!-- Text Content -->
        <div class="text-center lg:text-left lg:w-3/5 xl:w-2/3">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Call To Action</h2>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Action Button -->
        <div class="lg:w-auto flex-shrink-0">
          <a
            href="#"
            class="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-sm sm:text-base hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-orange-500"
          >
            Call To Action
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this static component
</script>

<style scoped>
/* No component-specific styles needed, Tailwind handles it */
</style>
