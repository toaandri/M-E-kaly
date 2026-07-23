# Madagasik'Hanina — Implementation Plan

> **For agentic workers:** Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Build a full-stack food delivery platform (Uber Eats clone) for Madagascar with 4 apps (Client, Driver, Vendor PWA, Admin) + NestJS API, supporting 3 Mobile Money operators, Mapbox maps, and real-time delivery tracking.

**Architecture:** Domain-oriented microservices behind a single NestJS API gateway. Event-driven order lifecycle with BullMQ job queues. PostgreSQL + PostGIS for geo queries. Redis for caching/real-time. Socket.IO for live tracking. React Native Expo for mobile apps, Next.js for web apps.

**Tech Stack:**

| Layer | Technology |
|-------|-----------|
| Mobile Apps | React Native (Expo SDK 51+) |
| Web Apps (Vendor PWA, Admin, Client Web) | Next.js 14+ (App Router) |
| API Gateway | NestJS (Node.js 20+) |
| ORM | Prisma |
| Database | PostgreSQL 16 + PostGIS 3.4 |
| Cache / Queues | Redis 7 + BullMQ |
| Real-time | Socket.IO (NestJS Gateway) |
| Maps | Mapbox GL JS + Mapbox Directions API |
| Storage | S3-compatible (MinIO self-hosted / AWS S3) |
| Payments | MVola API, Orange Money API, Airtel Money API |
| Notifications | Firebase Cloud Messaging (FCM) + Twilio SMS |
| Container Orchestration | Kubernetes (EKS/GKE) |
| CI/CD | GitHub Actions + ArgoCD |
| Monitoring | Prometheus + Grafana + Sentry |

---

## Global Constraints

- Node.js >= 20 LTS
- TypeScript 5.x strict mode everywhere
- React Native Expo SDK 51+
- Next.js 14+ (App Router, React Server Components)
- NestJS 10+
- Prisma 5.x
- PostgreSQL 16 + PostGIS 3.4
- Redis 7+
- All API responses follow JSON:API-like envelope: `{ data, meta, errors }`
- Currency: Ariary (MGA), all prices in integer Ar (no decimals)
- Bilingual: FR (default) + Malagasy (MG) on critical flows
- Mobile-first responsive design (375px → 1440px)
- Minimal comments in code (code should be self-documenting)

---

## Monorepo Structure

```
madagasik-hanina/
├── apps/
│   ├── api/                    # NestJS API Gateway + Services
│   ├── client-mobile/          # React Native Expo (Customer)
│   ├── driver-mobile/          # React Native Expo (Driver)
│   ├── vendor-web/             # Next.js (Vendor PWA)
│   ├── admin-web/              # Next.js (Admin Dashboard)
│   └── client-web/             # Next.js (Client Web - optional)
├── packages/
│   ├── shared-types/           # TypeScript types shared across apps
│   ├── ui/                     # Shared UI components (React Native)
│   ├── config/                 # Shared configs (ESLint, TS, etc.)
│   └── database/               # Prisma schema + migrations
├── docker/
│   ├── api.Dockerfile
│   ├── vendor-web.Dockerfile
│   ├── admin-web.Dockerfile
│   └── docker-compose.yml
├── k8s/                        # Kubernetes manifests
├── docs/                       # Documentation
│   ├── superpowers/
│   │   ├── specs/
│   │   └── plans/
├── turbo.json                  # Turborepo config
├── package.json                # Root package.json
└── .github/workflows/          # CI/CD pipelines
```

---

## Task 1: Project Scaffolding & Monorepo Setup

**Files:**
- Create: `package.json`, `turbo.json`, `tsconfig.base.json`, `.gitignore`
- Create: `apps/api/` (NestJS project via `@nestjs/cli`)
- Create: `apps/client-mobile/` (Expo project)
- Create: `apps/driver-mobile/` (Expo project)
- Create: `apps/vendor-web/` (Next.js project)
- Create: `apps/admin-web/` (Next.js project)
- Create: `packages/shared-types/`
- Create: `packages/ui/`
- Create: `packages/config/`
- Create: `packages/database/`

**Steps:**
- [ ] Initialize root `package.json` with workspaces
- [ ] Configure Turborepo (`turbo.json`)
- [ ] Create `tsconfig.base.json` with shared TS config
- [ ] Scaffold NestJS API in `apps/api/`
- [ ] Scaffold Expo apps in `apps/client-mobile/` and `apps/driver-mobile/`
- [ ] Scaffold Next.js apps in `apps/vendor-web/` and `apps/admin-web/`
- [ ] Create shared packages
- [ ] Add root `.gitignore` (includes `*cahier des charges*`)
- [ ] Verify `turbo dev` runs all apps

---

## Task 2: Database Schema Design (Prisma + PostGIS)

**Files:**
- Create: `packages/database/prisma/schema.prisma`
- Create: `packages/database/prisma/migrations/`
- Create: `packages/database/src/index.ts`

**Core Tables:** User, Address, Vendor, Category, MenuItem, MenuItemVariant, MenuItemExtra, Order, OrderItem, OrderStatusHistory, Driver, DriverEarning, FlashDeal, Rating, Payout, PaymentTransaction

---

## Task 3: NestJS API — Module Architecture

**Files:**
- Create: `apps/api/src/app.module.ts`
- Create: `apps/api/src/modules/auth/`
- Create: `apps/api/src/modules/users/`
- Create: `apps/api/src/modules/vendors/`
- Create: `apps/api/src/modules/catalog/`
- Create: `apps/api/src/modules/orders/`
- Create: `apps/api/src/modules/payments/`
- Create: `apps/api/src/modules/delivery/`
- Create: `apps/api/src/modules/matching/`
- Create: `apps/api/src/modules/flash/`
- Create: `apps/api/src/modules/ratings/`
- Create: `apps/api/src/modules/admin/`
- Create: `apps/api/src/modules/geo/`
- Create: `apps/api/src/modules/notifications/`
- Create: `apps/api/src/common/` (guards, interceptors, decorators, DTOs)

---

## Task 4: Auth Module (OTP + JWT)

**Files:**
- Create: `apps/api/src/modules/auth/auth.module.ts`
- Create: `apps/api/src/modules/auth/auth.controller.ts`
- Create: `apps/api/src/modules/auth/auth.service.ts`
- Create: `apps/api/src/modules/auth/strategies/jwt.strategy.ts`
- Create: `apps/api/src/modules/auth/dto/`

---

## Task 5: Vendor Module (Onboarding + Menu)

**Files:**
- Create: `apps/api/src/modules/vendors/vendors.module.ts`
- Create: `apps/api/src/modules/vendors/vendors.controller.ts`
- Create: `apps/api/src/modules/vendors/vendors.service.ts`
- Create: `apps/api/src/modules/catalog/catalog.module.ts`
- Create: `apps/api/src/modules/catalog/catalog.controller.ts`
- Create: `apps/api/src/modules/catalog/catalog.service.ts`

---

## Task 6: Geo Module (Mapbox + PostGIS)

**Files:**
- Create: `apps/api/src/modules/geo/geo.module.ts`
- Create: `apps/api/src/modules/geo/geo.service.ts`
- Create: `apps/api/src/modules/geo/mapbox.provider.ts`

---

## Task 7: Orders Module (State Machine)

**Files:**
- Create: `apps/api/src/modules/orders/orders.module.ts`
- Create: `apps/api/src/modules/orders/orders.controller.ts`
- Create: `apps/api/src/modules/orders/orders.service.ts`
- Create: `apps/api/src/modules/orders/state-machine.ts`

---

## Task 8: Payments Module (3 Mobile Money Providers)

**Files:**
- Create: `apps/api/src/modules/payments/payments.module.ts`
- Create: `apps/api/src/modules/payments/payments.service.ts`
- Create: `apps/api/src/modules/payments/providers/mvola.provider.ts`
- Create: `apps/api/src/modules/payments/providers/orange-money.provider.ts`
- Create: `apps/api/src/modules/payments/providers/airtel-money.provider.ts`

---

## Task 9: Delivery & Matching Module

**Files:**
- Create: `apps/api/src/modules/delivery/delivery.module.ts`
- Create: `apps/api/src/modules/delivery/delivery.service.ts`
- Create: `apps/api/src/modules/delivery/tracking.gateway.ts`
- Create: `apps/api/src/modules/matching/matching.module.ts`
- Create: `apps/api/src/modules/matching/matching.service.ts`

---

## Task 10: React Native Expo — Client App

**Files:**
- Create: `apps/client-mobile/app/` (Expo Router)
- Create: `apps/client-mobile/src/screens/`
- Create: `apps/client-mobile/src/components/`
- Create: `apps/client-mobile/src/services/` (API client)
- Create: `apps/client-mobile/src/stores/` (Zustand)
- Create: `apps/client-mobile/src/hooks/`

---

## Task 11: React Native Expo — Driver App

**Files:**
- Create: `apps/driver-mobile/app/` (Expo Router)
- Create: `apps/driver-mobile/src/screens/`
- Create: `apps/driver-mobile/src/components/`

---

## Task 12: Next.js — Vendor PWA

**Files:**
- Create: `apps/vendor-web/app/` (Next.js App Router)
- Create: `apps/vendor-web/src/components/`
- Create: `apps/vendor-web/src/lib/`

---

## Task 13: Next.js — Admin Dashboard

**Files:**
- Create: `apps/admin-web/app/` (Next.js App Router)
- Create: `apps/admin-web/src/components/`

---

## Task 14: Real-time Infrastructure (Socket.IO)

**Files:**
- Create: `apps/api/src/modules/notifications/notifications.gateway.ts`
- Create: `apps/api/src/modules/notifications/notifications.service.ts`

---

## Task 15: Infrastructure & Deployment

**Files:**
- Create: `docker/docker-compose.yml` (local dev)
- Create: `docker/api.Dockerfile`
- Create: `docker/vendor-web.Dockerfile`
- Create: `docker/admin-web.Dockerfile`
- Create: `k8s/` (Kubernetes manifests)
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`

---

## Implementation Phases & Milestones

### Phase 1.1 — Foundation (Weeks 1-2)
- [x] Monorepo scaffolding
- [ ] Database schema + Prisma setup
- [ ] NestJS API skeleton with all modules
- [ ] Auth module (OTP + JWT)
- [ ] Docker Compose for local dev

### Phase 1.2 — Vendor Side (Weeks 3-4)
- [ ] Vendor onboarding flow
- [ ] Catalog/menu CRUD
- [ ] Vendor PWA (dashboard + menu management)
- [ ] Image upload to S3/MinIO

### Phase 1.3 — Client Side (Weeks 5-6)
- [ ] Client app: auth + profile
- [ ] Map view with vendor pins (Mapbox)
- [ ] Vendor detail + menu browsing
- [ ] Cart + checkout flow

### Phase 1.4 — Orders & Payments (Weeks 7-8)
- [ ] Order state machine
- [ ] MVola integration
- [ ] Orange Money integration
- [ ] Airtel Money integration
- [ ] Cash payment flow

### Phase 1.5 — Delivery (Weeks 9-10)
- [ ] Driver app: auth + online toggle
- [ ] Matching algorithm
- [ ] Real-time GPS tracking (Socket.IO)
- [ ] Delivery completion flow
- [ ] Driver earnings

### Phase 1.6 — Admin & Polish (Weeks 11-12)
- [ ] Admin dashboard
- [ ] KYC validation
- [ ] Rating system
- [ ] Delivery rate configuration
- [ ] Commission management
- [ ] Bug fixes + performance optimization

### Phase 1.7 — Deployment (Week 13)
- [ ] Kubernetes manifests
- [ ] CI/CD pipeline
- [ ] Staging environment
- [ ] Production deployment
- [ ] Monitoring + alerting
