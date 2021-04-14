FROM node:14-alpine as base
RUN apk add --no-cache libc6-compat
WORKDIR /opt/app

FROM base as installer
COPY package*.json ./
RUN npm i --silent

FROM installer as builder
COPY . .
COPY --from=installer /opt/app/node_modules ./node_modules
RUN touch .env
RUN npm run env:prod
RUN npm run build

FROM builder as builderProp
RUN rm -rf ./node_modules
RUN npm i --only=prod --silent

FROM node:14-alpine AS runner
WORKDIR /opt/app
COPY --from=builderProp /opt/app/next.config.js ./
COPY --from=builderProp /opt/app/package.json ./package.json
COPY --from=builderProp /opt/app/public ./public
COPY --from=builderProp /opt/app/.next ./.next
COPY --from=builderProp /opt/app/node_modules ./node_modules
COPY --from=builderProp /opt/app/.env ./.env
COPY --from=builderProp /opt/app/build ./build

CMD ["npm", "start"]
