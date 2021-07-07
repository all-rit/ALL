FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

# This line is to prevent the build step from failing due to a memory overflow. 
# Source for the fix:
# https://github.com/wojtekmaj/react-pdf/issues/496#issuecomment-566200248
# Source maps allow you to view source code context obtained from stack traces in 
# their original unmodified form, which makes debugging minified/transpiled code
# like Typescript or ES6 easier. Since the container for this build is intermediate
# and is going to be discarded anyway, its generation isn't required. In order to 
# save space, this is disabled.
ENV GENERATE_SOURCEMAP false
# Give Node 8 gigabytes of space to build the app, as building appears to take a lot
# of memory. Like the previous set variable, this is to prevent the build step from
# failing due to the JavaScript heap running out of memory.
ENV NODE_OPTIONS "--max-old-space-size=8192"

RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /var/www/html

COPY --from=builder /app/build /var/www/html/

COPY ./nginx/default_https.conf /etc/nginx/conf.d/default.conf
