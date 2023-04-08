FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN export NODE_OPTIONS=--max-old-space-size=512
RUN npm run build
