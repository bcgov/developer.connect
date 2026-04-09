/**
 * Structured Logging for Cloud Run
 * Provides JSON-formatted logs fully integrated with Cloud Run logging
 * Logs are automatically picked up by Cloud Logging with proper severity levels
 */

export enum LogSeverity {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  NOTICE = 'NOTICE',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL'
}

export interface StructuredLogEntry {
  severity: LogSeverity
  message: string
  timestamp: string
  url?: string
  method?: string
  statusCode?: number
  userAgent?: string
  stack?: string
  [key: string]: any
}

function formatLog(entry: StructuredLogEntry): void {
  // Cloud Run automatically picks up JSON logs on stdout
  // Severity level ensures proper filtering in Cloud Logging
  console.log(JSON.stringify(entry))
}

export const logger = {
  debug: (message: string, meta?: Record<string, any>, url?: string) => {
    formatLog({
      severity: LogSeverity.DEBUG,
      message,
      timestamp: new Date().toISOString(),
      url,
      ...meta
    })
  },

  info: (message: string, meta?: Record<string, any>, url?: string) => {
    formatLog({
      severity: LogSeverity.INFO,
      message,
      timestamp: new Date().toISOString(),
      url,
      ...meta
    })
  },

  warn: (message: string, meta?: Record<string, any>, url?: string) => {
    formatLog({
      severity: LogSeverity.WARNING,
      message,
      timestamp: new Date().toISOString(),
      url,
      ...meta
    })
  },

  error: (message: string, error?: Error | null, meta?: Record<string, any>, url?: string) => {
    formatLog({
      severity: LogSeverity.ERROR,
      message,
      timestamp: new Date().toISOString(),
      url,
      stack: error?.stack,
      ...meta
    })
  },

  critical: (message: string, error?: Error | null, meta?: Record<string, any>, url?: string) => {
    formatLog({
      severity: LogSeverity.CRITICAL,
      message,
      timestamp: new Date().toISOString(),
      url,
      stack: error?.stack,
      ...meta
    })
  }
}
