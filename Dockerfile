FROM node:18.14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD |rm -rf result_build/* && cp -r build result_build
