# Selecting the playwrtight base image
FROM mcr.microsoft.com/playwright:v1.50.0-noble
RUN addgroup test && adduser -S -G test test
USER test
RUN mkdir e2e
WORKDIR /e2e
COPY package*.json .
# Install dependencies
RUN npm install
COPY . .
# Install all the browsers
RUN npx playwright install --with-deps
# This will run all the playwright tests
CMD [ "npx", "playwright", "test", "--reporter=allure-playwright"]