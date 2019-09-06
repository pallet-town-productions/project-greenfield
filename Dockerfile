FROM node:10.13-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 5000

CMD npm run build && npm install -g serve && serve -s build