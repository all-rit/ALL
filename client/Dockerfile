FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /var/www/html

COPY --from=builder /app/build /var/www/html/

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/localhost.* /etc/nginx/
