# Cómo construí mi portfolio personal con IA — Tutorial completo

> **Para el video de YouTube:** Este documento es el guión técnico del tutorial. Cubre desde la decisión de arquitectura hasta el resultado final, incluyendo los prompts exactos usados, los errores cometidos y cómo se corrigieron.

---

## Introducción

En este tutorial vamos a construir un **portfolio personal profesional** llamado EDCODE usando **Next.js 16, Tailwind CSS v4 y TypeScript**, con un diseño inspirado en Gumroad (estilo neo-brutalista). Todo el proceso fue guiado con Claude Code como asistente de IA.

**Lo que vas a aprender:**
- Cómo planear una web con IA antes de escribir una sola línea de código
- Arquitectura de un portfolio moderno con Next.js App Router
- Cómo implementar CI/CD con GitHub Actions + Vercel
- Diseño neo-brutalista estilo Gumroad con Tailwind CSS
- Gestión de contenido con TypeScript puro (sin CMS)

**Resultado final:** Una single-page con secciones Hero, Projects, Experience, Skills y Contact, con navbar inteligente que detecta la sección activa al hacer scroll.

---

## Prerrequisitos

- Node.js 20+
- Git instalado
- Cuenta en GitHub
- Cuenta en Vercel (gratis)
- Editor de código (VS Code recomendado)

---

## Parte 1 — Planificación con IA

### Por qué planear antes de codear

Antes de escribir código, usamos Claude Code en **modo planificación** para definir la arquitectura. Esto evita tomar decisiones equivocadas que cuesten horas de refactorización después.

### Prompt inicial

```
Vamos a planear la creación de una pagina web personal (EDCODE) donde pueda 
subir información mía (experiencia, estudios, conocimientos, proyectos, etc). 
Vamos a definir la arquitectura juntos.
```

### Decisiones tomadas

La IA hizo preguntas clave para definir la arquitectura:

**Stack tecnológico elegido:**
```
Framework:  Next.js 15 (App Router)
CSS:        Tailwind CSS v4
Lenguaje:   TypeScript
Fuente:     Geist (incluida en Next.js)
Deploy:     Vercel (gratis)
```

**Secciones definidas:**
- Hero / Intro
- Projects
- Experience
- Skills / Stack
- Contact

**Gestión de contenido:** Hardcodeado en TypeScript (sin CMS). Actualizar = editar archivos en `src/data/`.

**CI/CD:** GitHub Actions para lint + typecheck + build en cada PR. Vercel para auto-deploy.

### Consideración importante

> La IA propuso un "Gumroad Dark" como opción visual. Seleccionamos esa opción pensando que replicaría el estilo de Gumroad, pero el resultado inicial fue un tema oscuro genérico. **La corrección vino después** cuando se revisó el sitio real de Gumroad.

**Lección:** Cuando pidas un estilo de diseño, siempre da una URL de referencia concreta.

---

## Parte 2 — Scaffold del proyecto

### Comando de inicialización

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --no-import-alias
```

**Flags importantes:**
- `--typescript` — TypeScript activado
- `--tailwind` — Tailwind CSS preconfigurado
- `--eslint` — Linting desde el inicio
- `--app` — App Router de Next.js (no Pages Router)
- `--src-dir` — Código en `src/` en lugar de la raíz
- `--no-import-alias` — Usa `@/` por defecto para imports

> **Nota:** Se instaló Next.js 16.2.4 (versión más reciente al momento). Mejor aún.

### Estructura generada

```
edcode-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
├── public/
├── package.json
├── tsconfig.json
└── next.config.ts
```

### Script añadido al package.json

`create-next-app` no incluye el script de typecheck. Lo añadimos manualmente:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint",
    "typecheck": "tsc --noEmit"
  }
}
```

---

## Parte 3 — CI/CD con GitHub Actions

### Prompt usado

```
vamos a incluir también CI/CD con github
```

Seguido de seleccionar: Lint + Type check, Build check, Deploy preview (Vercel), Auto-deploy a producción.

### Archivo creado: `.github/workflows/ci.yml`

```yaml
name: CI

on:
  pull_request:
    branches: [main]

jobs:
  checks:
    name: Lint, Typecheck & Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Typecheck
        run: npm run typecheck

      - name: Build
        run: npm run build
```

### Estrategia de ramas

```
main        →  producción (auto-deploy vía Vercel)
feature/*   →  desarrollo
                ↓ abrir PR → CI corre → merge a main
```

### Integración con Vercel

Vercel se conecta al repositorio de GitHub y hace:
- **Push a `main`** → deploy automático a producción
- **Nuevo PR** → URL de preview generada automáticamente
- **CI falla** → el deploy queda bloqueado

No se necesita ningún workflow adicional para el deploy — Vercel lo gestiona solo.

---

## Parte 4 — Sistema de diseño

### Primera versión (incorrecta)

El tema inicial era oscuro con variables CSS:

```css
--bg: #0f0f0f;
--text: #ffffff;
--accent: #f9f871;  /* amarillo */
```

Al probar el sitio, el estilo no coincidía con Gumroad real.

### Prompt de corrección

```
el estilo de la pagina no sigue lo que pedí. 
Guíate del siguiente link: https://gumroad.com/
```

### Análisis del estilo Gumroad real

Después de analizar el sitio, el estilo real de Gumroad es **neo-brutalista**:

| Elemento | Valor |
|----------|-------|
| Background | `#ffffff` (blanco) |
| Background suave | `#f9f5f0` (crema) |
| Text | `#000000` (negro puro) |
| Accent | `#ff90e8` (rosa — color firma) |
| Bordes | `2px solid #000` |
| Sombras | `4px 4px 0 0 #000` (offset, sin blur) |
| Border-radius | `0px` (bordes rectos) |
| Tipografía | Extra-bold / Black weight |

### Variables CSS finales: `src/app/globals.css`

```css
@import "tailwindcss";

:root {
  --bg: #ffffff;
  --bg-soft: #f9f5f0;
  --text: #000000;
  --text-muted: #555555;
  --accent: #ff90e8;
  --border: 2px solid #000000;
  --shadow: 4px 4px 0 0 #000000;
  --shadow-sm: 2px 2px 0 0 #000000;
}
```

### La firma del estilo neo-brutalista

El elemento más distintivo es la **sombra offset sólida** (sin blur):

```css
box-shadow: 4px 4px 0 0 #000;
```

Y las cards que se "levantan" al hover:

```css
hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform
```

---

## Parte 5 — Estructura de carpetas

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Ensambla todas las secciones
│   └── globals.css         # Tokens de diseño + Tailwind
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      # Navbar con pill activo por sección
│   ├── sections/
│   │   ├── Hero.tsx        # Nombre + foto + bio + CTAs
│   │   ├── Projects.tsx    # Grid de proyectos
│   │   ├── Experience.tsx  # Timeline laboral
│   │   ├── Skills.tsx      # Grid de habilidades
│   │   └── Contact.tsx     # Links: GitHub, LinkedIn, Email
│   └── ui/
│       ├── Badge.tsx       # Chip de tecnología
│       ├── ProjectCard.tsx # Tarjeta de proyecto
│       └── SectionTitle.tsx # Heading de sección
└── data/
    ├── projects.ts         # Tu contenido de proyectos
    ├── experience.ts       # Tu historial laboral
    └── skills.ts           # Tus habilidades
```

**Principio:** Separar contenido del código. Todo lo que cambia frecuentemente vive en `src/data/`. Para actualizar el portfolio, solo editas esos archivos.

---

## Parte 6 — Capa de datos (TypeScript)

### Tipos definidos

```typescript
// src/data/projects.ts
export type Project = {
  title: string
  description: string
  techs: string[]
  github?: string
  demo?: string
  featured?: boolean
}

// src/data/experience.ts
export type Experience = {
  company: string
  role: string
  period: string      // ej: "2023 – Present"
  description: string
  techs?: string[]
}

// src/data/skills.ts
export type SkillCategory = {
  category: string
  items: string[]
}
```

### Ventaja de TypeScript sobre JSON

Si añades un campo incorrecto o te olvidas uno obligatorio, el compilador te avisa **antes de hacer deploy**. El CI lo atrapa en el paso de typecheck.

---

## Parte 7 — Componentes UI

### Badge — `src/components/ui/Badge.tsx`

Chip de tecnología con dos variantes:

```tsx
<Badge label="React" />              // borde negro
<Badge label="TypeScript" variant="accent" />  // fondo rosa
```

### SectionTitle — `src/components/ui/SectionTitle.tsx`

Heading reutilizable con línea divisora:

```tsx
<SectionTitle title="Projects" subtitle="Cosas que construí" />
```

### ProjectCard — `src/components/ui/ProjectCard.tsx`

Card con sombra offset, hover que eleva la card, links a GitHub y demo:

```tsx
<ProjectCard project={project} />
```

---

## Parte 8 — Navbar con sección activa

### Prompts de iteración del Navbar

**Primera iteración:**
```
Vamos a rediseñar el navbar. El nombre EDCODE debe ser más grande 
y del estilo que tiene gumroad o parecido.
[adjuntó imagen del navbar de Gumroad]
```

**Segunda iteración:**
```
edcode debe estar en mayusculas y orientado a la izquierda. 
Los links y el boton CTA deben estar orientados un poco más a la derecha.
También vamos a modificar el botón "Hire me" por Contact. 
Que nos lleve a la sección de contactos.
```

**Tercera iteración:**
```
Ahora debemos remover el anterior link Contact, ya que hemos creado 
el botón. Adicional, al botón Contact ponle una caja negra más grande 
para que llame la atención.
```

### Resultado final del Navbar

- **Logo:** `EDCODE` en mayúsculas, `font-black`, tamaño display — izquierda
- **Links:** pill negro activo (`bg-black text-white rounded-full`) que cambia automáticamente con scroll
- **Separador:** línea vertical `1px` entre links y botón CTA
- **Botón Contact:** negro, padding generoso, sin border-radius

### Detección de sección activa con IntersectionObserver

```tsx
useEffect(() => {
  const observers: IntersectionObserver[] = []

  NAV_LINKS.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection(id)
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    observer.observe(el)
    observers.push(observer)
  })

  return () => observers.forEach((o) => o.disconnect())
}, [])
```

**Clave:** El `rootMargin: "-40% 0px -55% 0px"` define una "ventana" en el centro del viewport. Solo la sección visible en esa franja se marca como activa.

---

## Parte 9 — Sección Hero con foto

### Prompts

```
En el about, al costado del nombre vamos a poner una foto mía, 
prepara el espacio solo para añadir la imagen.
```

```
Lo quiero un poco más grande para llamar la atención
```

```
ya subí una foto de perfil en public/foto_perfil
```

### Integración de la foto con Next.js Image

```tsx
import Image from "next/image"

<div
  className="relative shrink-0 w-80 h-80 sm:w-96 sm:h-96 border-2 border-black overflow-hidden"
  style={{ boxShadow: "var(--shadow)" }}
>
  <Image
    src="/foto_perfil.png"
    alt="Edson Benites"
    fill
    className="object-cover"
    priority
  />
</div>
```

**Por qué `fill` + `object-cover`:**
- `fill` hace que la imagen ocupe todo el contenedor (el `div` debe tener `position: relative`)
- `object-cover` recorta la imagen manteniendo proporciones — nunca se deforma
- `priority` carga la imagen antes que otras — mejora el LCP (Core Web Vital)

---

## Parte 10 — SEO y Metadata

### `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Edson Benites — Software Developer",
  description: "Portfolio de Edson Benites...",
  openGraph: {
    title: "Edson Benites — Software Developer",
    url: "https://edcode.vercel.app",
    siteName: "EDCODE",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://edcode.vercel.app"),
}
```

Next.js genera automáticamente las etiquetas `<meta>` para redes sociales a partir de este objeto.

---

## Parte 11 — Deploy en Vercel

### Paso a paso

1. Crear repositorio en GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tuusuario/edcode-web.git
git push -u origin main
```

2. Entrar a [vercel.com](https://vercel.com) → **New Project** → importar el repositorio

3. Vercel detecta Next.js automáticamente. Hacer click en **Deploy**.

4. En ~1 minuto tendrás una URL del tipo `edcode-web.vercel.app`.

5. Para el CI en PRs: el workflow de GitHub Actions corre automáticamente al abrir un PR. Vercel también genera una **preview URL** por PR.

### Flujo de trabajo después del deploy

```
1. Crear rama:  git checkout -b feature/nueva-seccion
2. Hacer cambios y commit
3. Abrir PR en GitHub
4. CI corre: lint + typecheck + build
5. Vercel genera preview URL para revisar los cambios
6. Merge a main → deploy automático a producción
```

---

## Parte 12 — Cómo actualizar el contenido

Una vez publicado, para actualizar tu información:

**Agregar un proyecto:**
```typescript
// src/data/projects.ts
{
  title: "Mi nuevo proyecto",
  description: "Qué hace y por qué lo construí.",
  techs: ["React", "Supabase"],
  github: "https://github.com/tuusuario/proyecto",
  demo: "https://proyecto.vercel.app",
}
```

**Agregar experiencia:**
```typescript
// src/data/experience.ts
{
  company: "Nueva Empresa",
  role: "Senior Developer",
  period: "2025 – Present",
  description: "Descripción del rol y logros.",
  techs: ["TypeScript", "AWS"],
}
```

Guardar el archivo → Vercel detecta el push → deploy automático en ~1 minuto.

---

## Resumen de tecnologías

| Tecnología | Versión | Para qué |
|------------|---------|----------|
| Next.js | 16.2.4 | Framework React con SSG |
| React | 19.2.4 | UI library |
| Tailwind CSS | v4 | Estilos utilitarios |
| TypeScript | 5.x | Tipado estático |
| Geist | — | Fuente del sistema |
| GitHub Actions | — | CI (lint + typecheck + build) |
| Vercel | — | Hosting + CD |

---

## Lecciones aprendidas

1. **Planear antes de codear ahorra tiempo.** Las preguntas de arquitectura al inicio evitaron refactorizaciones costosas.

2. **Da referencias visuales concretas.** Pedir "estilo Gumroad" sin adjuntar una URL resultó en un tema oscuro genérico. Al compartir el link real, el rediseño fue preciso.

3. **Itera en el diseño con prompts específicos.** El navbar tardó 3 iteraciones en quedar bien. Cada iteración fue un prompt concreto con lo que faltaba.

4. **Separa contenido del código.** Los archivos `src/data/*.ts` permiten actualizar el portfolio sin tocar componentes.

5. **El CI es barato de implementar y caro de no tener.** Con 20 líneas de YAML, cada cambio pasa por lint + typecheck + build antes de llegar a producción.

---

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Gumroad](https://gumroad.com) — referencia de diseño
