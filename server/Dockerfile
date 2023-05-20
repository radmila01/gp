FROM node:19.0.0

WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./package-lock*.json ./

RUN npm install
RUN npm install -g nodemon
RUN npm install bcrypt
RUN npm install

COPY . .
CMD ["node", "index.js"]

EXPOSE 3001
