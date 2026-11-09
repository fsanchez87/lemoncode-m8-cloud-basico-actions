# 🍋 Lemoncode · Módulo Cloud · Laboratorio opcional

## Objetivo

Automatizar el despliegue de una aplicación en **Azure usando Docker y GitHub Actions**.

La aplicación está desarrollada con React, TypeScript y Vite. Con cada push o merge a `deploy-azure-from-docker-ghactions`, un workflow de GitHub Actions construye una imagen Docker,y despliega la nueva versión en **Azure App Service (Web App for Containers)**.
