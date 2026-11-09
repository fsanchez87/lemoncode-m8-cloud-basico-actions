# 🍋 Lemoncode · Módulo Cloud · Laboratorio opcional: Crear imagen en Docker Hub 

## Objetivo

La aplicación está desarrollada con React, TypeScript y Vite. Esta parte del laboratorio consiste en **desplegar la imagen Docker en Docker Hub**: construir la imagen a partir del `Dockerfile` y publicarla en un repositorio de Docker Hub.


## Contenedor Docker

El [Dockerfile](./Dockerfile) utiliza dos etapas:

1. **Compilación:** parte de `node:24-alpine`, activa pnpm 11, instala las dependencias con `pnpm install --frozen-lockfile` y ejecuta `pnpm run build` para generar `dist/`.
2. **Servidor:** parte de `nginx:1.27-alpine`, copia los archivos generados a `/usr/share/nginx/html` y sirve la aplicación en el puerto `80`.

