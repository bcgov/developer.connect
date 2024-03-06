export default defineAppConfig({
  ui: {
    accordion: {
      wrapper: 'w-full flex flex-col',
      container: 'w-full flex flex-col',
      item: {
        base: '',
        size: 'text-sm',
        color: 'text-bcGovColor-darkGray dark:text-white',
        padding: 'pt-1.5 pb-3',
        icon: 'ms-auto transform transition-transform duration-200'
      },
      transition: {
        enterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
        leaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out'
      },
      default: {
        openIcon: 'i-heroicons-chevron-down-20-solid',
        closeIcon: '',
        class: 'mb-1.5 w-full',
        variant: 'accordian_trigger'
      }
    },
    button: {
      variant: {
        accordian_trigger: 'text-bcGovColor-darkGray font-semibold dark:text-white dark:hover:bg-bcGovBlue-100/10 hover:bg-bcGovBlue-50 disabled:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-white transition-colors duration-300 ease-in-out',
        link: 'text-{color}-500 tracking-wide text-base hover:text-{color}-600 disabled:text-{color}-500 dark:text-white dark:hover:text-bcGovBlue-300 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-white',
        solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-[#E0E7ED] dark:hover:bg-bcGovGray-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-white',
        outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-[#E0E7ED] hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-[#E0E7ED]/25 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-white'
      }
    },
    verticalNavigation: {
      wrapper: 'border-s border-gray-500 dark:border-[#94A3B8] space-y-2',
      base: 'group block border-s -ms-px leading-6 before:hidden focus-visible:rounded',
      padding: 'p-0 ps-4',
      rounded: '',
      font: '',
      ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-white',
      active: 'text-primary-500 dark:text-[#7BB5EF] border-[#94A3B8] dark:border-[#7BB5EF] font-semibold',
      inactive: 'border-transparent hover:border-gray-900 dark:hover:border-white text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
    }
  }
})

// declare module '@nuxt/schema' {
//   interface AppConfigInput {
//   }
// }
