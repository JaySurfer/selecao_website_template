<template>
  <section class="bg-slate-50 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title - MODIFIED for left alignment -->
      <div class="mb-12 sm:mb-16">
        <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
          SERVICES
        </p>

        <div class="h-0.5 w-16 bg-orange-500 mb-3"></div>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">WHAT WE DO OFFER</h2>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <a
          v-for="service in services"
          :key="service.id"
          :href="service.href"
          class="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div class="flex items-start gap-4 sm:gap-5">
            <!-- Icon -->
            <div
              :class="[
                'flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-lg flex items-center justify-center',
                service.iconBgColorClass,
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                :class="['w-full h-full', service.iconStrokeColorClass]"
                aria-hidden="true"
                v-html="service.iconSvgPath"
              ></svg>
            </div>
            <!-- Text Content -->
            <div>
              <h3
                :class="[
                  'text-lg sm:text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors duration-300',
                  service.titleColorClass,
                ]"
              >
                {{ service.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: 'Nesciunt Mete',
    description:
      'Provident nihil minus qui consequatur non omnis maiores. Eos accusamus minus dolores iure perferendis tempore et consequatur.',
    // Icon: Two tags/cards (approximated)
    iconSvgPath: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
    `,
    iconBgColorClass: 'bg-cyan-100', // Light blue background for icon
    iconStrokeColorClass: 'stroke-cyan-500', // Blue stroke for icon
    titleColorClass: 'text-cyan-600', // Blue for title
    href: 'https://bootstrapmade.com/content/demo/Selecao/service-details.html', // From your screenshot
  },
  {
    id: 2,
    title: 'Eosle Commodi',
    description:
      'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
    // Icon: Calendar (Heroicons - CalendarDaysIcon)
    iconSvgPath: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    `,
    iconBgColorClass: 'bg-orange-100',
    iconStrokeColorClass: 'stroke-orange-500',
    titleColorClass: 'text-orange-600',
    href: '#',
  },
  {
    id: 3,
    title: 'Ledo Markt',
    description:
      'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
    // Icon: List/Hamburger menu (Heroicons - Bars3Icon)
    iconSvgPath: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    `,
    iconBgColorClass: 'bg-green-100',
    iconStrokeColorClass: 'stroke-green-500',
    titleColorClass: 'text-green-600',
    href: '#',
  },
  {
    id: 4,
    title: 'Asperiores Commodit',
    description:
      'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
    // Icon: Dashed line with dots (Custom)
    iconSvgPath: `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" d="M4 12h16" />
      <circle cx="6" cy="12" r="1.5" fill="currentColor" class="stroke-none"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" class="stroke-none"/>
      <circle cx="18" cy="12" r="1.5" fill="currentColor" class="stroke-none"/>
    `,
    iconBgColorClass: 'bg-red-100',
    iconStrokeColorClass: 'stroke-red-500', // For the line
    titleColorClass: 'text-red-600',
    href: '#',
  },
  {
    id: 5,
    title: 'Velit Doloremque',
    description:
      'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
    // Icon: Globe (Heroicons - GlobeAltIcon)
    iconSvgPath: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0021 12c0-.778.099-1.533.284-2.253M12 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    `,
    iconBgColorClass: 'bg-purple-100',
    iconStrokeColorClass: 'stroke-purple-500',
    titleColorClass: 'text-purple-600',
    href: '#',
  },
  {
    id: 6,
    title: 'Dolori Architecto',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
    // Icon: Clock/Gauge (Approximated from Heroicons ClockIcon)
    iconSvgPath: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    `,
    iconBgColorClass: 'bg-pink-100',
    iconStrokeColorClass: 'stroke-pink-500',
    titleColorClass: 'text-pink-600',
    href: '#',
  },
])
</script>

<style scoped>
/* No component-specific styles needed, Tailwind handles it */
</style>
