FROM node:20-alpine AS dependencies-env
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

FROM node:20-alpine
WORKDIR /app
COPY . .
COPY --from=dependencies-env /app/node_modules /app/node_modules
CMD ["npm", "run", "start"]