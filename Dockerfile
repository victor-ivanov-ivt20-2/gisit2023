FROM node:18-alpine3.17 as dev
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run dev
