FROM node:14.16.0-alpine3.13
COPY . /src
WORKDIR /src
CMD npm install
RUN npx playwright install --with-deps
RUN npx playwright test