# Atomic Design on NextJS (13)

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About Atomic Design

1. Atoms

If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.

2. Molecules

Container of Atoms.

3. Organisms

Container of Molecules and/of Atoms and/or other organisms.

4. Templates/Layouts.

Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.

5. Pages.

Pages are specific instances of templates that show what a UI looks like with real representative content in place.

## About project

### Plugins added:

- Prettier
- Eslint
- Typescript sort

### Plugins To consider:

- Commitlint

### TODO:

1. Review why using a tsconfig alias for @/models:src/models/... is not working.
