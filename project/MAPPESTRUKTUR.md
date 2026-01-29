# 📁 Mappestruktur for Next.js + Supabase Prosjekt

## 🏗️ Komplett mappestruktur

```
pu-testing/
├── app/                    # Next.js App Router (hovedsider og ruter)
│   ├── api/               # Backend API routes (serverless functions)
│   │   ├── auth/          # Autentisering endpoints (login, register, logout)
│   │   ├── posts/         # Post-relaterte API endpoints
│   │   └── admin/         # Admin-relaterte API endpoints
│   ├── login/             # Login side
│   ├── admin/             # Admin panel sider
│   ├── dashboard/         # Bruker dashboard
│   ├── posts/             # Post-relaterte sider (vis, opprett, rediger)
│   ├── user/              # Brukerprofilsider
│   ├── layout.tsx         # Root layout komponent
│   ├── page.tsx           # Forside
│   └── globals.css        # Globale CSS stilar
├── components/            # Gjenbrukbare React komponenter
│   ├── ui/               # Generelle UI komponenter (knapper, inputs, etc.)
│   ├── auth/             # Autentisering komponenter (LoginForm, RegisterForm)
│   └── posts/            # Post komponenter (PostCard, PostForm, PostList)
├── lib/                   # Utility funksjoner og konfiguration
│   ├── supabase/         # Supabase klient og konfiguration
│   ├── db.ts             # Database utility funksjoner
│   └── utils.ts          # Generelle hjelperfunksjoner
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definisjoner
├── utils/                 # Standalone utility funksjoner
├── middleware/            # Next.js middleware
├── public/               # Statiske filer
└── package.json          # NPM avhengigheter og scripts
```

## 📋 Detaljert tabell over hva som skal være i hver mappe

| Mappe | Innhold | Eksempler |
|-------|---------|-----------|
| **app/** | Hovedsider og ruter (Next.js App Router) | page.tsx, layout.tsx, loading.tsx |
| **app/api/** | Backend API endpoints (serverless functions) | route.ts filer for REST endpoints |
| **app/api/auth/** | Autentisering API | `/login/route.ts`, `/register/route.ts`, `/logout/route.ts` |
| **app/api/posts/** | Post-relaterte API | `/route.ts` (GET/POST), `/[id]/route.ts` (GET/PUT/DELETE) |
| **app/api/admin/** | Admin-spesifikke API | `/users/route.ts`, `/stats/route.ts` |
| **app/login/** | Login side | `page.tsx` |
| **app/admin/** | Admin panel sider | `page.tsx`, `users/page.tsx`, `posts/page.tsx` |
| **app/dashboard/** | Bruker dashboard | `page.tsx` |
| **app/posts/** | Post sider | `page.tsx` (liste), `new/page.tsx`, `[id]/page.tsx` |
| **app/user/** | Brukerprofil sider | `page.tsx`, `settings/page.tsx` |
| **components/ui/** | Grunnleggende UI komponenter | Button, Input, Modal, Card |
| **components/auth/** | Autentisering komponenter | LoginForm, RegisterForm, ProtectedRoute |
| **components/posts/** | Post komponenter | PostCard, PostForm, PostList, PostEditor |
| **lib/supabase/** | Supabase konfigurasjon | client.ts, auth.ts, database.ts |
| **lib/** | Database og utility funksjoner | db.ts, utils.ts, validations.ts |
| **hooks/** | Custom React hooks | useAuth, usePosts, useUser |
| **types/** | TypeScript type definisjoner | User, Post, ApiResponse interfaces |
| **utils/** | Standalone hjelperfunksjoner | formatDate, slugify, imageUpload |
| **middleware/** | Next.js middleware | auth middleware, logging |
| **public/** | Statiske filer | bilder, ikoner, favicon |

## 🔧 Neste steg

1. **Installer Supabase:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Konfigurer environment variabler** i `.env.local`

3. **Sett opp Supabase klient** i `lib/supabase/`

4. **Bygg komponenter** etter behov i `components/`

5. **Lag API routes** i `app/api/`

6. **Implementer sider** i `app/`