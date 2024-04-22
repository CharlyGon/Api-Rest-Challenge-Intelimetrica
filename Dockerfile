FROM node:21

RUN apt-get update && apt-get install -y bash \
    && apt-get clean
WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
