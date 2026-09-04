FROM node:20-alpine AS dependencies-env
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

FROM node:20-alpine
WORKDIR /app
COPY --from=dependencies-env /app/node_modules /app/node_modules
COPY . ./
ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=500
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]