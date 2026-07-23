# Monorepo Scaffolding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize a Turborepo monorepo with 5 apps (NestJS API, 2 Expo mobile, 2 Next.js web) and 4 shared packages.

**Architecture:** Turborepo monorepo with npm workspaces. Each app is independently buildable. Shared code lives in packages/.

**Tech Stack:** Turborepo, NestJS, Expo, Next.js, Prisma, TypeScript 5.x strict

## Global Constraints

- Node.js >= 20 LTS
- TypeScript 5.x strict mode
- Minimal comments in code
- Mobile-first design
- npm as package manager

---

### Task 1: Root Configuration

**Files:**
- Create: `package.json`
- Create: `turbo.json`
- Create: `tsconfig.base.json`
- Modify: `.gitignore`

- [ ] **Step 1: Create root package.json**

```json
{
  "name": "madagasik-hanina",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "test": "turbo test"
  },
  "devDependencies": {
    "turbo": "^2.0.0"
  }
}
```

- [ ] **Step 2: Create turbo.json**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

- [ ] **Step 3: Create tsconfig.base.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Update .gitignore**

Append to existing `.gitignore`:
```
# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Expo
.expo/
dist/
web-build/

# Next.js
.next/
out/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build
*.tsbuildinfo

# Turbo
.turbo/
```

- [ ] **Step 5: Install root dependencies**

Run: `npm install`
Expected: turbo installed in node_modules

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: initialize turborepo monorepo with root config"
```

---

### Task 2: API App (NestJS)

**Files:**
- Create: `apps/api/` (via nest new)

- [ ] **Step 1: Initialize NestJS project**

Run: `npx @nestjs/cli new apps/api --package-manager npm --skip-git --strict`
Expected: NestJS project created in apps/api/

- [ ] **Step 2: Install dependencies**

Run in `apps/api/`:
```bash
npm install @nestjs/config @nestjs/jwt @nestjs/passport @nestjs/websockets @nestjs/platform-socket.io @prisma/client prisma bull @nestjs/bull ioredis socket.io class-validator class-transformer
npm install -D @types/node
```

- [ ] **Step 3: Verify build**

Run: `cd apps/api && npm run build`
Expected: dist/ folder created

- [ ] **Step 4: Commit**

```bash
git add apps/api/
git commit -m "feat: add NestJS API app with dependencies"
```

---

### Task 3: Client Mobile App (Expo)

**Files:**
- Create: `apps/client-mobile/` (via create-expo-app)

- [ ] **Step 1: Initialize Expo project**

Run: `npx create-expo-app@latest apps/client-mobile --template blank-typescript`
Expected: Expo project created

- [ ] **Step 2: Install dependencies**

Run in `apps/client-mobile/`:
```bash
npx expo install expo-router expo-location expo-camera @tanstack/react-query zustand react-native-maps @rnmapbox/maps
```

- [ ] **Step 3: Verify build**

Run: `cd apps/client-mobile && npx expo export`
Expected: dist/ folder created

- [ ] **Step 4: Commit**

```bash
git add apps/client-mobile/
git commit -m "feat: add client mobile Expo app with dependencies"
```

---

### Task 4: Driver Mobile App (Expo)

**Files:**
- Create: `apps/driver-mobile/` (via create-expo-app)

- [ ] **Step 1: Initialize Expo project**

Run: `npx create-expo-app@latest apps/driver-mobile --template blank-typescript`
Expected: Expo project created

- [ ] **Step 2: Install dependencies**

Run in `apps/driver-mobile/`:
```bash
npx expo install expo-router expo-location @tanstack/react-query zustand @rnmapbox/maps
```

- [ ] **Step 3: Verify build**

Run: `cd apps/driver-mobile && npx expo export`
Expected: dist/ folder created

- [ ] **Step 4: Commit**

```bash
git add apps/driver-mobile/
git commit -m "feat: add driver mobile Expo app with dependencies"
```

---

### Task 5: Vendor Web App (Next.js)

**Files:**
- Create: `apps/vendor-web/` (via create-next-app)

- [ ] **Step 1: Initialize Next.js project**

Run: `npx create-next-app@latest apps/vendor-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack`
Expected: Next.js project created

- [ ] **Step 2: Install dependencies**

Run in `apps/vendor-web/`:
```bash
npm install socket.io-client zustand lucide-react
```

- [ ] **Step 3: Verify build**

Run: `cd apps/vendor-web && npm run build`
Expected: .next/ folder created

- [ ] **Step 4: Commit**

```bash
git add apps/vendor-web/
git commit -m "feat: add vendor web Next.js app with dependencies"
```

---

### Task 6: Admin Web App (Next.js)

**Files:**
- Create: `apps/admin-web/` (via create-next-app)

- [ ] **Step 1: Initialize Next.js project**

Run: `npx create-next-app@latest apps/admin-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack`
Expected: Next.js project created

- [ ] **Step 2: Install dependencies**

Run in `apps/admin-web/`:
```bash
npm install socket.io-client zustand lucide-react
```

- [ ] **Step 3: Verify build**

Run: `cd apps/admin-web && npm run build`
Expected: .next/ folder created

- [ ] **Step 4: Commit**

```bash
git add apps/admin-web/
git commit -m "feat: add admin web Next.js app with dependencies"
```

---

### Task 7: Shared Packages

**Files:**
- Create: `packages/shared-types/src/index.ts`
- Create: `packages/ui/src/index.ts`
- Create: `packages/config/` (eslint, prettier, tailwind configs)
- Create: `packages/database/prisma/schema.prisma`

- [ ] **Step 1: Create shared-types package**

Create `packages/shared-types/package.json`:
```json
{
  "name": "@madagasik-hanina/shared-types",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "tsc",
    "lint": "eslint src/",
    "test": "echo \"No tests yet\""
  },
  "devDependencies": {
    "typescript": "^5.4.0"
  }
}
```

Create `packages/shared-types/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

Create `packages/shared-types/src/index.ts`:
```typescript
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  VENDOR = 'VENDOR',
  DRIVER = 'DRIVER',
  ADMIN = 'ADMIN',
}

export enum VendorTier {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  PICKED_UP = 'PICKED_UP',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentMethod {
  CASH = 'CASH',
  MOBILE_MONEY = 'MOBILE_MONEY',
  CARD = 'CARD',
}
```

- [ ] **Step 2: Create ui package**

Create `packages/ui/package.json`:
```json
{
  "name": "@madagasik-hanina/ui",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "tsc",
    "lint": "eslint src/",
    "test": "echo \"No tests yet\""
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-native": "^0.74.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.0.0",
    "react": "^18.0.0",
    "react-native": "^0.74.0"
  }
}
```

Create `packages/ui/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

Create `packages/ui/src/index.ts`:
```typescript
export { Button } from './Button';
export { Card } from './Card';
export { Input } from './Input';
```

Create `packages/ui/src/Button.tsx`:
```typescript
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === 'secondary' && styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === 'secondary' && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E53935',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: '#E53935',
  },
});
```

Create `packages/ui/src/Card.tsx`:
```typescript
import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export function Card({ children, style, ...props }: CardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
```

Create `packages/ui/src/Input.tsx`:
```typescript
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {}

export function Input({ style, ...props }: InputProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#9E9E9E"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },
});
```

- [ ] **Step 3: Create config package**

Create `packages/config/package.json`:
```json
{
  "name": "@madagasik-hanina/config",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "lint": "echo \"No lint needed\""
  }
}
```

Create `packages/config/eslint.config.js`:
```javascript
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
```

Create `packages/config/.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

Create `packages/config/tailwind-preset.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        accent: {
          500: '#E53935',
          600: '#D32F2F',
          700: '#C62828',
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Create database package**

Create `packages/database/package.json`:
```json
{
  "name": "@madagasik-hanina/database",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "echo \"No build needed for Prisma schema\"",
    "lint": "echo \"No lint needed\"",
    "generate": "prisma generate",
    "migrate": "prisma migrate dev",
    "studio": "prisma studio"
  },
  "dependencies": {
    "@prisma/client": "^5.0.0"
  },
  "devDependencies": {
    "prisma": "^5.0.0",
    "typescript": "^5.4.0"
  }
}
```

Create `packages/database/prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  phone     String?  @unique
  role      UserRole @default(CUSTOMER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum UserRole {
  CUSTOMER
  VENDOR
  DRIVER
  ADMIN
}
```

- [ ] **Step 5: Install workspace dependencies**

Run from root: `npm install`
Expected: All workspace dependencies resolved

- [ ] **Step 6: Verify shared-types build**

Run: `cd packages/shared-types && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 7: Commit**

```bash
git add packages/
git commit -m "feat: add shared packages (types, ui, config, database)"
```

---

### Task 8: Final Verification

**Files:**
- Verify all apps build
- Verify lint passes

- [ ] **Step 1: Full install from root**

Run: `npm install`
Expected: Clean install, no errors

- [ ] **Step 2: Build all**

Run: `npx turbo build`
Expected: All apps and packages build successfully

- [ ] **Step 3: Lint all**

Run: `npx turbo lint`
Expected: No lint errors (or only warnings)

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: verify monorepo scaffolding complete"
```
