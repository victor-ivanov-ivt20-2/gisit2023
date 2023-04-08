FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN node --max_old_space_size=16384 ./node_modules/vite/bin/vite.js
RUN export NODE_OPTIONS=--max-old-space-size=32768
RUN npm install
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
