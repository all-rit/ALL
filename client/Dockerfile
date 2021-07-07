FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

# This line is to prevent the build step from failing due to a memory
# overflow. Source for the fix:
# https://github.com/wojtekmaj/react-pdf/issues/496#issuecomment-566200248
# NOTE: I am not entirely sure why this works
# Some of the comments in the thread suggest this may be an issue unique to
# VSCode and how it runs Docker. This warrants further testing on my part.
# TODO
ENV GENERATE_SOURCEMAP false
ENV NODE_OPTIONS "--max-old-space-size=8192"

RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /var/www/html

COPY --from=builder /app/build /var/www/html/

COPY ./nginx/default_https.conf /etc/nginx/conf.d/default_https.conf
COPY /etc/letsencrypt/live/all.rit.edu/fullchain.pem /etc/nginx/
COPY /etc/letsencrypt/live/all.rit.edu/privkey.pem /etc/nginx/
