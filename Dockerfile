FROM node:20-alpine AS build
WORKDIR /app
# copy package manifests first to leverage cache
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:20-alpine

# Install nginx in final image
RUN apk add --no-cache nginx

# Create nginx runtime directories and ensure permissions for the nginx user
RUN mkdir -p /usr/share/nginx/html /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/log/nginx /var/run && \
	chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /var/run

# Copy built static files from build stage to standard nginx html dir
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Copy repo nginx.conf (if present) to override default (ensures try_files and security headers)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
