
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

# 启动命令
CMD ["node", "app.js"]