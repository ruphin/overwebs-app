FROM ruphin/webserve

COPY . /usr/share/nginx/html
RUN mv /usr/share/nginx/html/node_modules/gluon-router /usr/share/nginx/html
RUN mv /usr/share/nginx/html/node_modules/lit-html /usr/share/nginx/html
RUN mv /usr/share/nginx/html/node_modules/overwebs-* /usr/share/nginx/html
RUN mv /usr/share/nginx/html/node_modules/gluonjs /usr/share/nginx/html

