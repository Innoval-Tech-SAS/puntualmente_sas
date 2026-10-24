# Puntualmente S.A.S. – Sitio web corporativo

Sitio web corporativo de Puntualmente S.A.S. con secciones de inicio, nosotros, servicios, contacto y políticas, carruseles de clientes y servicios, formularios de contacto y de pago, visor de documentos PDF y botón de WhatsApp.

## Stack

React 19 · TypeScript · Vite (SWC) · HeroUI · Tailwind CSS 4 · Framer Motion · React Router 7 · ESLint

## Estructura

Organizado por módulos, uno por sección del sitio:

| Carpeta | Contenido |
| --- | --- |
| `src/modules/common` | Componentes compartidos (navbar, footer, formularios, carruseles) y estilos CSS Modules |
| `src/modules/inicio` | Página de inicio |
| `src/modules/nosotros` | Quiénes somos |
| `src/modules/servicios` | Servicios |
| `src/modules/contacto` | Contacto |
| `src/modules/policies` | Políticas y tratamiento de datos |
| `src/config` | Configuración del sitio |

## Cómo correrlo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

La URL de la API se define en `.env.development` / `.env.production` con `VITE_API_BASE_URL`.
