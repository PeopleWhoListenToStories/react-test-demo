FROM nginx:alpine

COPY build /app/build
COPY ./docker/dev/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
