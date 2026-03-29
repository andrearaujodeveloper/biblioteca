
FROM node:24-slim

WORKDIR /app


COPY package*.json ./


RUN npm install --only=production


COPY . .


ENV PORT=1000
EXPOSE ${PORT}

CMD ["node", "index.js"]
