# ===== builder stage =====
FROM node:15.5-buster as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

CMD ["npm", "run", "dev"]

EXPOSE 3000