# ===== builder stage =====
FROM node:15.5-buster as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm run build

# ==== server stage =====
FROM node:15.5-buster

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /app/.next ./.next

CMD ["npm", "start"]

EXPOSE 3000