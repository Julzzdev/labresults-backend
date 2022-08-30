FROM node:14-alpine AS development
RUN apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine AS production
RUN apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN chmod -R o+rwx node_modules/puppeteer/.local-chromium
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/main"]