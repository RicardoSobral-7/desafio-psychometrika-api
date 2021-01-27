FROM node:14.15.4
COPY /backend /simulado/api
WORKDIR /simulado/api
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 5550