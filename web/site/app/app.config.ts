export default defineAppConfig({
  connect: {
    header: {
      localeSelect: false,
      whatsNew: false,
      loginMenu: false,
      createAccount: false,
      notifications: false,
      accountOptionsMenu: false
    }
  },
  ui: {
    colors: {
      primary: 'blue',
      warning: 'amber',
      neutral: 'gray'
    },
    breadcrumb: {
      slots: {
        separatorIcon: 'text-white'
      },
      variants: {
        active: {
          true: {
            link: 'text-white font-medium'
          },
          false: {
            link: 'text-white underline font-medium'
          }
        }
      },
      compoundVariants: [
        {
          active: true,
          class: {
            link: 'text-white'
          }
        },
        {
          active: false,
          class: {
            link: 'text-white underline hover:text-white'
          }
        }
      ]
    },
    button: {
      slots: {
        base: 'font-semibold transition-all duration-200'
      },
      variants: {
        size: {
          xs: {
            base: 'px-3'
          },
          sm: {
            base: 'px-4'
          },
          md: {
            base: 'px-4'
          },
          lg: {
            base: 'px-5'
          },
          xl: {
            base: 'px-6'
          }
        }
      },
      compoundVariants: [{
        color: 'primary' as const,
        variant: 'solid' as const,
        class: 'hover:bg-primary active:bg-primary shadow-[0_0_20px_var(--btn-glow)] hover:shadow-[0_0_30px_var(--btn-glow-hover)] hover:-translate-y-px active:translate-y-0 [--btn-glow:color-mix(in_oklch,var(--ui-primary)_25%,transparent)] [--btn-glow-hover:color-mix(in_oklch,var(--ui-primary)_35%,transparent)]'
      }]
    }
  }
})
