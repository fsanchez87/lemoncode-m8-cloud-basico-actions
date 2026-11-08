# 🍋 Lemoncode · Módulo Cloud · Laboratorio opcional

## Objetivo

Automatizar el despliegue de una aplicación en **Render usando Docker**, como parte del laboratorio del máster.

La aplicación está desarrollada con React, TypeScript y Vite. Render se conecta al repositorio de GitHub y, con cada push o merge a `main`, construye una imagen Docker y despliega la nueva versión.

## Contenedor Docker

El [Dockerfile](./Dockerfile) utiliza dos etapas:

1. **Compilación:** parte de `node:24-alpine`, activa pnpm 11, instala las dependencias con `pnpm install --frozen-lockfile` y ejecuta `pnpm run build` para generar `dist/`.
2. **Servidor:** parte de `nginx:1.27-alpine`, copia los archivos generados a `/usr/share/nginx/html` y sirve la aplicación en el puerto `80`.


## Configuración en Render

1. Subir el proyecto a GitHub, incluyendo `Dockerfile`, `.dockerignore` y `pnpm-lock.yaml`.
2. En Render, crear un **Web Service** y conectar la cuenta de GitHub para seleccionar este repositorio.
3. Configurar el servicio:

   | Campo | Valor |
   | --- | --- |
   | Branch | `deploy-render-from-docker` |
   | Language | `Docker` |
   | Root Directory | Dejar vacío: el proyecto está en la raíz |
   | Dockerfile Path | `./Dockerfile` |
   | Docker Command | Dejar vacío para utilizar el `CMD` del Dockerfile |
   | Auto-Deploy | `On Commit` |

4. Elegir el nombre, la región y el plan del servicio, y crearlo para iniciar el primer despliegue.
5. Revisar los logs de construcción y arranque. Cuando finalice el despliegue, abrir la URL que Render asigna al servicio.

Nginx escucha en el puerto `80`, que Render puede detectar automáticamente. La instalación de dependencias, la compilación y el arranque quedan definidos en el Dockerfile.
