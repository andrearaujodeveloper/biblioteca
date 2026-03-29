
FROM node:24-slim

WORKDIR /app


COPY package*.json ./


RUN npm install --only=production


COPY . .

 deixar dinâmico
ENV PORT=10000
EXPOSE 10000

CMD ["node", "index.js"]
