FROM node:12.18.0-stretch as node-server
LABEL authors="Yohon J. Bravo"
WORKDIR /bikestore
COPY ./dist . 
COPY ./prod . 
RUN npm install --production --silent &&  mv node_modules ../ 
EXPOSE 9000
CMD ["node","server.js"]