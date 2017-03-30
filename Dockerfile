FROM node:7.6.0
WORKDIR /app

COPY . /app
RUN npm install \
  && npm test

CMD npm start
