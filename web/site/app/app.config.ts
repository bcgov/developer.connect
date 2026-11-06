/* eslint-disable max-len */
export default defineAppConfig({
  ui: {
    contentNavigation: {
      slots: {
        trigger: 'font-bold uppercase text-neutral-highlighted p-1.5! lg:ml-3 hover:before:bg-blue-50! ms-1',
        root: 'border-none',
        itemWithChildren: 'flex flex-col data-[state=open]:mb-1.5',
        link: 'group relative w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:outline-primary! before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-2',
        linkTrailing: 'ms-auto inline-flex gap-1.5 items-center pe-1.5',
        list: 'isolate mx-0 -mt-1.5'
      },
      variants: {
        active: {
          true: {
            link: 'text-primary font-bold bg-blue-100 rounded'
          },
          false: {
            link: [
              'text-neutral',
              '[&:not([aria-expanded])]:hover:font-bold',
              '[&:not([aria-expanded])]:hover:text-primary!',
              '[&:not([aria-expanded])]:hover:before:bg-blue-50!',
              'transition-colors before:transition-colors'
            ]
          }
        }
      }
    },
    pageCard: {
      slots: {
        root: 'relative flex flex-col h-[420px] w-[390px] overflow-hidden rounded bg-white shadow-md transition-transform focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-350 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-blue-350',
        spotlight: 'hidden',
        container: 'relative flex flex-col h-full w-full p-0 sm:p-0 gap-0 text-base!',
        wrapper: 'flex flex-col flex-1 w-full',
        header: 'relative flex h-[60px] w-full items-center bg-blue-350 px-4 py-3.5 font-semibold tracking-wide lg:px-7 mb-0 shrink-0',
        body: 'flex-1 w-full px-4 py-3.5 text-left text-neutral sm:p-7',
        footer: 'w-full px-4 pb-3.5 text-left sm:p-7 mt-auto pt-0 shrink-0',
        leading: 'hidden',
        leadingIcon: 'hidden',
        title: 'hidden',
        description: 'hidden'
      },
      variants: {
        variant: {
          outline: {
            root: 'bg-white ring-0'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
