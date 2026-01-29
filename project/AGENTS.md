# 🤖 AGENTS.md - Developer Guidelines

## 📋 Prosjekt Oversikt

Next.js 16 app med TypeScript, Tailwind CSS, og planlagt Supabase integrasjon. Focus på clean code, konsekvent styling, og skalerbar arkitektur.

---

## 🏗️ Arkitektur & Mappestruktur

### 📁 **Obligatorisk mappestruktur:**

```
app/                    # Next.js App Router - kun sider og layout
├── api/               # Backend endpoints (serverless functions)
├── login/             # Autentisering sider
├── dashboard/         # Bruker areas
├── admin/             # Admin panel
├── posts/             # Post relaterte sider
└── user/              # Brukerprofilsider

components/            # Gjenbrukbare UI komponenter
├── ui/               # Basis UI (Button, Input, Modal)
├── auth/             # Auth-spesifikke komponenter
└── posts/            # Post-spesifikke komponenter

lib/                   # Business logic og utilities
├── supabase/         # Database konfiguration
└── utils.ts          # Hjelperfunksjoner

hooks/                 # Custom React hooks
types/                 # TypeScript type definisjoner
utils/                 # Standalone utility funksjoner
```

### 🎯 **Separasjon av bekymringer:**

- **Pages** (`app/`): Kun layout og routing
- **Components** (`components/`): Kun UI og presentasjon
- **Logic** (`hooks/`, `lib/`): Business logic og state management
- **Types** (`types/`): TypeScript interfaces og typer

---

## 🎨 GitHub-Inspired Design System

### **🌙 Farge Palett (GitHub Style):**

```tsx
// Primary Colors
bg-white, text-gray-900         // Light mode primary
bg-gray-900, text-white         // Dark mode primary
bg-gray-50, bg-gray-100         // Subtle backgrounds

// Accent Colors (bruk sparsommelig)
text-blue-600, hover:text-blue-700    // Links
bg-green-600, hover:bg-green-700      // Success (merge, create)
bg-red-600, hover:bg-red-700          // Danger (delete, error)
text-orange-600                       // Warning

// GitHub Grays (primære farger)
text-gray-900     // Primary text
text-gray-700     // Secondary text
text-gray-500     // Tertiary text/icons
border-gray-300   // Subtle borders
bg-gray-50        // Card backgrounds
```

### **🎯 GitHub Button Styles:**

```tsx
// Primary Button (GitHub style)
<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium border border-transparent shadow-sm transition-colors">
  Primary Action
</button>

// Secondary Button
<button className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 shadow-sm transition-colors">
  Secondary
</button>

// Danger Button
<button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium border border-transparent shadow-sm transition-colors">
  Delete
</button>

// Minimal Button
<button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
  Cancel
</button>
```

### **📝 GitHub Typography:**

```tsx
// Headers (subtle, not bold unless necessary)
<h1 className="text-2xl font-semibold text-gray-900">Page Title</h1>
<h2 className="text-xl font-medium text-gray-900">Section</h2>
<h3 className="text-lg font-medium text-gray-900">Subsection</h3>

// Body Text
<p className="text-gray-700 leading-relaxed">Regular paragraph</p>
<span className="text-gray-500 text-sm">Secondary info</span>

// Code/Technical (monospace)
<code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">
  const user = 'github';
</code>
```

### **🃏 GitHub Card Pattern:**

```tsx
<div className="bg-white border border-gray-300 rounded-lg shadow-sm">
  <div className="p-4 border-b border-gray-200">
    <h3 className="text-lg font-medium text-gray-900">Card Header</h3>
  </div>
  <div className="p-4">
    <p className="text-gray-700">Card content</p>
  </div>
</div>
```

### **📋 GitHub List/Table Style:**

```tsx
// List Items
<div className="border-b border-gray-200 last:border-b-0">
  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
    <div className="flex items-center space-x-3">
      <span className="text-gray-900 font-medium">Item Title</span>
      <span className="text-gray-500 text-sm">metadata</span>
    </div>
    <button className="text-gray-500 hover:text-gray-700">⋯</button>
  </div>
</div>
```

---

## 🎨 Styling Guidelines

### **Tailwind CSS Standard (GitHub Style):**

```tsx
// ✅ RIKTIG - GitHub-inspired subtle styling
<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium border border-transparent shadow-sm transition-colors">
  Klikk her
</button>

// ❌ FEIL - Ikke GitHub style
<button className="bg-blue-500 p-3 rounded text-white">Klikk her</button>
```

### **GitHub Spacing Standard:**

```tsx
// Container spacing
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Card padding
<div className="p-4">           // Small card
<div className="p-6">           // Medium card
<div className="px-6 py-4">     // Header/footer sections

// Element spacing
<div className="space-y-4">     // Vertical spacing between elements
<div className="space-x-3">     // Horizontal spacing (buttons, icons)
<div className="gap-4">         // Grid gaps
```

### **GitHub Navigation Pattern:**

```tsx
// ✅ RIKTIG - Subtle GitHub-style navigation
<nav className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-3">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-semibold text-gray-900">AppName</h1>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            Dashboard
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm">
          Sign in
        </button>
      </div>
    </div>
  </div>
</nav>
```

### **Farge Palett (ALLTID bruk disse):**

- **Primary**: `green-600` (GitHub's primary action color)
- **Primary Hover**: `green-700`
- **Secondary**: `gray-50`, `gray-100` (subtle backgrounds)
- **Text Primary**: `gray-900` (main text)
- **Text Secondary**: `gray-700` (secondary text)
- **Text Tertiary**: `gray-500` (metadata, icons)
- **Borders**: `gray-200`, `gray-300`
- **Danger**: `red-600` (delete actions)
- **Warning**: `orange-600` (warnings)

### **GitHub Spacing Standard:**

- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Card Padding**: `p-4` (small), `p-6` (medium), `px-6 py-4` (sections)
- **Button Padding**: `px-4 py-2` (standard), `px-3 py-2` (small)
- **Element Spacing**: `space-y-4` (vertical), `space-x-3` (horizontal)
- **Grid Gaps**: `gap-4`, `gap-6`

### **GitHub Effects & Transitions:**

```tsx
// Subtle shadows (GitHub doesn't use heavy shadows)
shadow-sm              // Very subtle
border border-gray-200 // Prefer borders over shadows

// Smooth transitions
transition-colors      // For hover states
hover:bg-gray-50      // Subtle hover backgrounds
hover:text-gray-900   // Subtle text color changes
```

---

## 🔧 Komponent Guidelines

### **1. 📄 Page Komponenter** (`app/*/page.tsx`)

```tsx
// ✅ RIKTIG struktur
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LoginForm />
    </div>
  );
}
```

**Regler:**

- Kun layout og import av komponenter
- Ingen business logic
- Alltid export default
- Beskrivende navn: `LoginPage`, `DashboardPage`

### **2. 🧩 UI Komponenter** (`components/`)

```tsx
// ✅ RIKTIG komponent struktur (GitHub style)
"use client";

import { useState } from "react";

interface LoginFormProps {
  redirectTo?: string;
}

export function LoginForm({ redirectTo = "/dashboard" }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <form className="space-y-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email"
          />
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
```

**Regler:**

- ALLTID TypeScript interfaces for props
- Descriptive prop names
- Default values hvor det gir mening
- Export med `export function`, ikke default

### **3. 🪝 Custom Hooks** (`hooks/`)

```tsx
// ✅ RIKTIG hook struktur
"use client";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logic her

  return { user, loading, login, logout };
}
```

**Regler:**

- Alltid start med `use`
- Return object med tydelige navn
- Håndter loading states
- Error handling

---

## 🔐 Autentisering Pattern

### **Standard Auth Flow:**

```tsx
// 1. UI Component
export function LoginForm() {
  const { login, loading } = useAuth(); // <- Hook for logic
  return <form onSubmit={handleSubmit}>...</form>;
}

// 2. Auth Hook
export function useAuth() {
  const login = async (email, password) => {
    // All auth logic
  };
  return { login, user, loading };
}

// 3. Protected Routes
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (!user) return <LoginRedirect />;
  return children;
}
```

---

## 📝 Naming Conventions

### **Filer:**

- **Pages**: `page.tsx`, `layout.tsx`, `loading.tsx`
- **Komponenter**: `LoginForm.tsx`, `PostCard.tsx` (PascalCase)
- **Hooks**: `useAuth.tsx`, `usePosts.tsx`
- **Utils**: `utils.ts`, `auth.ts`
- **Types**: `index.ts`, `auth.ts`

### **Variabler & Funksjoner:**

```tsx
// ✅ RIKTIG
const [isLoading, setIsLoading] = useState(false);
const handleSubmit = async (e: React.FormEvent) => {};
const userEmail = user?.email;

// ❌ FEIL
const [loading, setLoading] = useState(false);
const submit = async (e) => {};
const email = user?.email;
```

### **CSS Classes (GitHub Order):**

```tsx
// ✅ RIKTIG - GitHub-inspired class order
className =
  "flex items-center justify-between bg-white hover:bg-gray-50 text-gray-900 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium shadow-sm transition-colors";

// Rekkefølge: layout → position → background → text → spacing → borders → effects → transitions
```

### **🎨 GitHub Form Styling:**

```tsx
// Input fields (GitHub style)
<input className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

// Select dropdowns
<select className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">

// Checkboxes (with labels)
<label className="flex items-center space-x-2">
  <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
  <span className="text-gray-700 text-sm">Remember me</span>
</label>
```

---

## 🚨 Error Handling

### **Standard Error Pattern:**

```tsx
// ✅ RIKTIG
export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      setError(null);
      await login(email, password);
    } catch (err) {
      setError("En feil oppstod under innlogging");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </form>
  );
}
```

---

## 📱 Responsive Design

### **Standard Breakpoints:**

```tsx
// ✅ RIKTIG - Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="text-sm md:text-base lg:text-lg">
<div className="px-4 sm:px-6 lg:px-8">
```

**Breakpoints**: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`

---

## ✅ Code Review Checklist

### **Før commit:**

- [ ] TypeScript interfaces definert
- [ ] Konsekvent Tailwind styling
- [ ] Error handling implementert
- [ ] Loading states håndtert
- [ ] Responsive design testet
- [ ] Console.log fjernet
- [ ] Descriptive component/function names
- [ ] Proper file structure followed

### **Performance:**

- [ ] `'use client'` kun hvor nødvendig
- [ ] Lazy loading for store komponenter
- [ ] Unødvendige re-renders unngått
- [ ] Images optimized

---

## 🎯 Quick Reference

### **Vanlige mønstre:**

```tsx
// Form state
const [formData, setFormData] = useState({ email: "", password: "" });
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

// API calls
const handleSubmit = async () => {
  setIsLoading(true);
  setError(null);
  try {
    await apiCall();
  } catch (err) {
    setError("Feilmelding");
  } finally {
    setIsLoading(false);
  }
};

// Loading button
<button disabled={isLoading} className="...">
  {isLoading ? "Laster..." : "Submit"}
</button>;
```

### **Import rekkefølge:**

```tsx
// 1. React/Next
import React from "react";
import { useRouter } from "next/navigation";

// 2. Third-party
import { motion } from "framer-motion";

// 3. Internal
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
```

---

**🔄 Dette dokumentet oppdateres etter behov. Følg disse retningslinjene for konsekvent og vedlikeholdbar kode.**
