# M-E-kaly (Madagasik Hanina)

Plateforme de livraison de repas pour Madagascar.

## Architecture

Monorepo Turborepo avec workspaces :

| App | Stack | Description |
|-----|-------|-------------|
| `admin-web` | Next.js | Back-office administration |
| `vendor-web` | Next.js | Portail vendeurs/restaurants |
| `client-mobile` | Expo (React Native) | App client |
| `driver-mobile` | Expo (React Native) | App livreur |
| `api` | NestJS | API REST backend |

## Packages partagés

| Package | Description |
|---------|-------------|
| `@madagasik-hanina/ui` | Composants React Native (Button, Card, Input) |
| `@madagasik-hanina/config` | Config partagée (Tailwind, ESLint, Prettier) |
| `@madagasik-hanina/shared-types` | Types et enums communs |
| `@madagasik-hanina/database` | Schéma Prisma + migrations |

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev     # Lancer toutes les apps
npm run build   # Build production
npm run lint    # Lint
npm run test    # Tests
```

## Stack technique

- **Frontend web** : Next.js 14, Tailwind CSS, TypeScript
- **Mobile** : Expo SDK 51, React Native
- **Backend** : NestJS, Prisma ORM, PostgreSQL
- **Monorepo** : Turborepo, npm workspaces
- **CI/CD** : GitHub Actions
