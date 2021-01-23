FROM node:15.5-buster

WORKDIR /app

COPY package*.json ./

RUN ["npm", "ci"]

CMD ["npm", "run", "dev"]

EXPOSE 3000