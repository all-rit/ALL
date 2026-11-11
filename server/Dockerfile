FROM node:20-alpine AS dependencies-env
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache git
# Tell Git that /app is safe to access regardless of file owner
RUN git config --global --add safe.directory /app
COPY --from=dependencies-env /app/node_modules ./node_modules
COPY . ./
CMD ["npm", "run", "dev"]