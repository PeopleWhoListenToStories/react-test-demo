FROM nginx:alpine

COPY react-test-demo-dist /app/react-test-demo-dist
COPY ./docker/dev/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
