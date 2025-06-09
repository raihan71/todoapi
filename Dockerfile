FROM node:18
WORKDIR /todoapi
COPY package.json /todoapi
RUN npm ci --no-audit
COPY . ./
EXPOSE 3000
CMD ["node", "app"]
