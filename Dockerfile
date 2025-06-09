FROM node:18
WORKDIR /todoapi
COPY package.json
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app"]
