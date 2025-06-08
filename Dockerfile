# Etapa 1: Build
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir la app
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copia configuración de Nginx personalizada (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]