FROM node:12

workdir /app

copy package*.json ./

run npm install

copy . .

env PORT=3001

expose 3001

cmd ["npm", "server"]