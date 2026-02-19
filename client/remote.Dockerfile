FROM node:20-alpine AS dependencies-env
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

FROM node:20-alpine AS build-env
WORKDIR /app
COPY --from=dependencies-env /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build-env /app/build ./build
CMD ["npx", "serve", "-s", "build", "-l", "80"]
