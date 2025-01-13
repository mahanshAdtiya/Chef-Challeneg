FROM node:20.9.0-alpine

COPY . /chefchallenge
WORKDIR /chefchallenge/
EXPOSE 4015
RUN npm i
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "-l", "4015", "dist/"]