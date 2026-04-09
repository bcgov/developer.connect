import { logger } from '~/utils/logger'

export default defineEventHandler(async (event) => {
  // Log incoming request
  const method = event.method || 'GET'
  const url = getRequestURL(event)
  const path = new URL(url).pathname

  logger.info(`[${method}] ${path}`, {
    method,
    path,
    url: url.toString(),
    userAgent: getRequestHeader(event, 'user-agent')
  })

  // Handle and log errors
  try {
    // Continue to next handler
    await (event._handled || Promise.resolve())
  } catch (error: unknown) {
    const errorInstance = error instanceof Error ? error : new Error(String(error))

    logger.error(`[${method}] ${path} - Error`, errorInstance, {
      method,
      path,
      url: url.toString()
    })
    throw error // re-throw for Nitro to handle
  }
})
