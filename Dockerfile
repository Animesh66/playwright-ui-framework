FROM node:14.16.0-alpine3.13
RUN addgroup test && adduser -S -G test test
USER test
WORKDIR /src
COPY package*.json .
RUN npm install
COPY . .
RUN npx playwright install --with-deps
RUN npx playwright test