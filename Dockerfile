FROM node:14-alpine

WORKDIR /api

COPY ./api/package*.json ./

RUN apk add --update --no-cache git \
  curl \
  && npm install

COPY ./api .

ENV PORT 3000
EXPOSE 3000
ENV HOST "0.0.0.0"

CMD ["npm", "start"]