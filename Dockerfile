FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN NODE_OPTIONS=--max-old-space-size=512
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
