FROM ruphin/webserve

COPY . /usr/share/nginx/html
RUN mv /usr/share/nginx/html/dist/index.html /usr/share/nginx/html/index.html
RUN mkdir /usr/share/nginx/html/node_modules/overwebs-app
RUN cp /usr/share/nginx/html/overwebs-app.js* /usr/share/nginx/html/node_modules/overwebs-app/

