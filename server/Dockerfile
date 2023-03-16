FROM node:18.14.0

WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./package-lock*.json ./

RUN npm install
COPY . .
CMD ["node", "index.js"]