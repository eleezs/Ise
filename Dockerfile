FROM node:latest

ARG DB_HOST
ARG DB_NAME
ARG DB_USERNAME
ARG DB_PASSWORD
ARG NODE_ENV
ARG JWTKEY
ARG TOKEN_EXPIRATION

WORKDIR /app

COPY package*.json ./
COPY .sequelizerc ./


ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .

RUN npm install -g sequelize-cli
RUN npm install --include=dev

RUN npm run db:migrate
RUN npm run db:seed


RUN npm run build
EXPOSE 3006
CMD [ "npm", "run", "start:prod" ]