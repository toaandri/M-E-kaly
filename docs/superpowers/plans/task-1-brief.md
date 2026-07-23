# Task 1: Project Scaffolding & Monorepo Setup

## Task Description

Initialize a Turborepo monorepo with the following structure:

### Root Configuration
- `package.json` with workspaces: `apps/*`, `packages/*`
- `turbo.json` with `build`, `dev`, `lint`, `test` pipelines
- `tsconfig.base.json` with shared TypeScript config (strict mode)
- `.gitignore` (Node, Expo, Next.js, env files, `*cahier des charges*`)

### Apps to Create

1. **apps/api/** — NestJS project
   - Initialize with `@nestjs/cli`
   - Add: `@nestjs/config`, `@nestjs/jwt`, `@nestjs/passport`, `@nestjs/websockets`, `@nestjs/platform-socket.io`, `@prisma/client`, `prisma`, `bull`, `@nestjs/bull`, `ioredis`, `socket.io`, `class-validator`, `class-transformer`
   - Add devDeps: `@types/node`, `typescript`

2. **apps/client-mobile/** — Expo project
   - Initialize with `npx create-expo-app`
   - Add: `expo-router`, `expo-location`, `expo-camera`, `@tanstack/react-query`, `zustand`, `react-native-maps`, `@rnmapbox/maps`
   - Add devDeps: `typescript`, `@types/react`

3. **apps/driver-mobile/** — Expo project
   - Initialize with `npx create-expo-app`
   - Add: `expo-router`, `expo-location`, `@tanstack/react-query`, `zustand`, `@rnmapbox/maps`

4. **apps/vendor-web/** — Next.js project
   - Initialize with `npx create-next-app` (App Router, TypeScript, Tailwind)
   - Add: `socket.io-client`, `zustand`, `lucide-react`

5. **apps/admin-web/** — Next.js project
   - Initialize with `npx create-next-app` (App Router, TypeScript, Tailwind)
   - Add: `socket.io-client`, `zustand`, `lucide-react`

### Packages to Create

1. **packages/shared-types/** — TypeScript types
   - Create `src/index.ts` with exports
   - Add basic types: `UserRole`, `VendorTier`, `OrderStatus`, `PaymentMethod`

2. **packages/ui/** — Shared React Native components
   - Create `src/index.ts` with exports
   - Add placeholder components: `Button`, `Card`, `Input`

3. **packages/config/** — Shared configs
   - ESLint config
   - Prettier config
   - Tailwind preset

4. **packages/database/** — Prisma schema
   - Initialize Prisma with PostgreSQL
   - Create placeholder schema

### Verification
- Run `npm install` from root
- Run `turbo build` — all apps build
- Run `turbo dev` — all apps start
- Run `turbo lint` — no errors

## Context

This is the foundation for the entire Madagasik'Hanina project. All subsequent tasks depend on this monorepo structure.

## Global Constraints

- Node.js >= 20 LTS
- TypeScript 5.x strict mode
- Minimal comments in code
- Mobile-first design

## Work Directory

`D:\Ecole\service sakafo\M-E-kaly`
