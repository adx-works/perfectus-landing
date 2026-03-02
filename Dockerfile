FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app
COPY --from=build /app/.output ./
COPY --from=build /app/package*.json ./

EXPOSE 3000
CMD ["node", "server/index.mjs"]
