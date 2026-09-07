import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import App from '../App'

afterEach(() => {
  cleanup()
  document.head.querySelectorAll('script').forEach((s) => s.remove())
})

describe('Vercel Web Analytics', () => {
  it('injects the analytics script when the app renders', () => {
    expect(document.head.querySelector('script[src*="vercel"]')).toBeNull()
    render(<App />)
    const script = document.head.querySelector('script[src*="vercel"]')
    expect(script).not.toBeNull()
    expect(script.getAttribute('data-sdkn')).toBe('@vercel/analytics/react')
  })
})
