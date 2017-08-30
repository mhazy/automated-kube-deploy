FROM node:8

ENV PORT 8080

WORKDIR /usr/src/app

COPY index.js .

EXPOSE 8080

CMD ["node", "index.js"]
