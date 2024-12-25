FROM node:alpine
COPY . /src
WORKDIR /src
CMD npm install
RUN npx playwright install --with-deps
RUN npx playwright test