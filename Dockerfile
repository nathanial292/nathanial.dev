FROM node:13

WORKDIR /usr/src/app

#COPY package*.json /usr/src/app
COPY . /usr/src/app
RUN yarn

RUN yarn run build:prod
EXPOSE 3000

CMD [ "yarn", "run", "server:prod" ]