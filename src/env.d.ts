/// <reference types="vite/client" />
// In src/vite-env.d.ts, src/env.d.ts, or src/images.d.ts

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string // Or specific SVG type if needed
  export default value
}

declare module '*.gif' {
  const value: string
  export default value
}

// Add any other image types you might use
