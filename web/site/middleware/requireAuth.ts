export default defineNuxtRouteMiddleware(async (to) => {
  const user = await getCurrentUser()
  // const { $i18n } = useNuxtApp()
  const localePath = useLocalePath()
  if (!user) {
    // might need to manually build localePath
    // return navigateTo({ path: `/${$i18n.locale.value}/sbc/auth/login`, query: { redirect: to.fullPath } })
    return navigateTo({ path: localePath('/sbc/auth/login'), query: { redirect: to.fullPath } })
  }
})
