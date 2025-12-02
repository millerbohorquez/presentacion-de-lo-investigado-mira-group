# Requisitos e instalación

Este proyecto es una aplicación Next.js 16 con React 19 y Tailwind CSS v4.

## Requisitos
- Node.js 20.x LTS (recomendado) o ≥ 18.18
- Git
- Un gestor de paquetes: npm (≥ 10) o pnpm (≥ 8)

Verifica versiones:

```bash
node -v
npm -v    # si usas npm
pnpm -v   # si usas pnpm
```

## Clonar e instalar
```bash
git clone https://github.com/millerbohorquez/presentacion-de-lo-investigado-mira-group.git
cd presentacion-de-lo-investigado-mira-group

# Elige un gestor y úsalo de forma consistente
npm install     # opción A
# o
pnpm install    # opción B
```

> Consejo: si usas pnpm por primera vez, habilita corepack:
```bash
corepack enable
```

## Desarrollo
```bash
npm run dev      # o pnpm dev
```
Abre http://localhost:3000.

## Build y producción
```bash
npm run build    # o pnpm build
npm start        # o pnpm start
```

## Lint
```bash
npm run lint     # o pnpm lint
```

## Stack técnico
- Next.js `16.0.3`
- React `19.2.0`
- Tailwind CSS `^4.1.9` vía `@tailwindcss/postcss`

## Variables de entorno
Si necesitas configurar claves o URLs, crea un archivo `.env.local` en la raíz:
```
VAR=valor
```

## Problemas comunes (Windows)
- Si PowerShell muestra un aviso de ejecución de scripts y bloquea comandos:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
Vuelve a ejecutar los comandos de instalación/ejecución.
