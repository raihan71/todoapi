FROM node:latest
WORKDIR /todoapi
COPY package.json /todoapi
RUN npm install --no-audit
COPY . ./
EXPOSE 3000
CMD ["node", "app"]
