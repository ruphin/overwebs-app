FROM ruphin/webserve

COPY . /usr/share/nginx/html
RUN mv /usr/share/nginx/html/node_modules/* /usr/share/nginx/html
