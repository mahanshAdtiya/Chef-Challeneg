FROM node:alpine3.18 AS build

WORKDIR /chefchallenge

COPY package*.json /chefchallenge

RUN npm install

COPY . /chefchallenge

RUN npm run build

RUN npm install -g serve

EXPOSE 4015

CMD ["serve", "-s", "-l", "4015", "dist/"]
