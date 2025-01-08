FROM nginx:latest

COPY . /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./cert/ontariofgc.ca_ecc/ontariofgc.ca.cer /etc/nginx/ssl/ontariofgc.ca/cert.pem
COPY ./cert/ontariofgc.ca_ecc/ontariofgc.ca.key /etc/nginx/ssl/ontariofgc.ca/key.pem 

EXPOSE 80/tcp
EXPOSE 443/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]