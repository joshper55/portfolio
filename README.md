# Portfolio — Jose Eduardo Pereda

Portafolio personal hecho en **Angular 18** (standalone components) + **Tailwind CSS** de José "Josh" Pereda.

## Estructura

```
src/app/
  components/
    nav/          → menú fijo con scroll y versión móvil
    hero/         → intro, título, links de contacto
    about/        → perfil profesional + stats
    skills/       → stack técnico agrupado por categoría
    projects/     → tarjetas expandibles con detalle de cada proyecto
    experience/   → timeline de experiencia laboral
    education/    → formación académica
    contact/      → llamado a la acción con email/WhatsApp/LinkedIn
    footer/
  data/
    portfolio-data.ts  → TODA la información editable (proyectos, experiencia, skills, educación)
  directives/
    scroll-reveal.directive.ts → animación de aparición al hacer scroll
```
## Desarrollo local

```bash
npm install
npm start          # http://localhost:4200
```

## Build de producción

```bash
npm run build
```

El resultado queda en `dist/portfolio-jose/browser`.
