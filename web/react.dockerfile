FROM node:14.15.4
COPY /web /simulado/app
WORKDIR /simulado/app
RUN npm install
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000