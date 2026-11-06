const localeRegex = /^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//
const trailingSlashRegex = /(?<=.)\/+$/

// Firebase Hosting config redirects direct pages to the url with a trailing slash, which may not allow content queries
// to work properly resulting in a 404
function normalizePath (path: string): string {
  return path.replace(localeRegex, '/').replace(trailingSlashRegex, '')
}

export function useRouteWithoutLocale (): Ref<string> {
  const route = useRoute()

  const routeWithoutLocale = ref(normalizePath(route.path))

  watch(
    () => route.path,
    (newPath) => {
      routeWithoutLocale.value = normalizePath(newPath)
    }
  )

  return routeWithoutLocale
}
