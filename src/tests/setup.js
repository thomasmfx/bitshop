import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

window.scrollTo = vi.fn() // prevent "Error: Not implemented: window.scrollTo"

expect.extend(matchers)

afterEach(() => {
  cleanup()
})
