# Build
FROM node:24-alpine AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@11 --activate
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
COPY . .

RUN pnpm run build

# Servir estáticos
FROM nginx:1.27-alpine

COPY --from=build /app/dist  /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
