FROM nginx:stable-alpine3.17-slim
# Install Nginx and remove cache
RUN apk add --update nginx && rm -rf /var/cache/apk/*
#Copy our Config file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
#Copy contents of our react build
COPY ./build/ /usr/share/nginx/html/
# Create a volume of our html folder, so data persists on reboot.
#VOLUME ["/usr/share/nginx/html"]

CMD ["nginx", "-g", "daemon off;"]
