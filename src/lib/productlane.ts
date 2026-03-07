/**
 * Utility functions for interacting with the Productlane widget
 */

declare global {
  interface Window {
    Productlane?: {
      open: (type?: string) => void
    }
  }
}

let __lastProductlaneOpenAt = 0

/**
 * Opens the Productlane feedback widget when an error occurs
 * This prompts users to provide feedback about what they were trying to do
 */
export function openProductlaneFeedback(): void {
  // Check if we're in a browser environment and if Productlane is available
  if (typeof window !== 'undefined' && window.Productlane) {
    try {
      const PRODUCTLANE_FEEDBACK_COOLDOWN_MS = 2000
      const now = Date.now()
      if (now - __lastProductlaneOpenAt < PRODUCTLANE_FEEDBACK_COOLDOWN_MS) return
      __lastProductlaneOpenAt = now
      window.Productlane.open('FEEDBACK')
    }
    catch (error) {
      // Silently fail if Productlane widget fails to open
      // We don't want feedback collection to cause additional errors
      console.warn('Failed to open Productlane feedback widget:', error)
    }
  }
}

/**
 * Test helper to reset the cooldown timer
 * @internal
 */
export function __resetProductlaneCooldown(): void {
  __lastProductlaneOpenAt = 0
}
