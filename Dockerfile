FROM node:18-alpine3.17 as build
WORKDIR /app
COPY ./dist /app

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
