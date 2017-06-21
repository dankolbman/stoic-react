FROM node:latest

RUN \
  apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
  chown -R www-data:www-data /var/lib/nginx


# Define mountable directories.
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

WORKDIR /tmp
COPY package.json /tmp/
RUN npm install

WORKDIR /app
COPY . /app/
RUN cp -a /tmp/node_modules /app/
RUN npm run build
RUN \
    rm -r /usr/share/nginx/html && \
    mv /app/static /app/public && \
    mv /app/public/ /usr/share/nginx/html/

# Define working directory.
WORKDIR /etc/nginx

# Expose ports.
EXPOSE 8089

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf

# Define default command.
CMD ["nginx","-g","daemon off;"]
