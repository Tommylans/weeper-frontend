FROM node:14-alpine
WORKDIR /server
COPY ["./package.json", "./yarn.lock", "./"]
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build
CMD yarn start
