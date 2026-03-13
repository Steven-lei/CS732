FROM node:22-alpine

# 设置工作目录
WORKDIR /app

# 先复制 package.json，利用 Docker 缓存层优化构建速度
COPY package*.json ./

# 只安装生产环境依赖（节省空间）
RUN npm install --omit=dev

# 复制剩余源代码
COPY . .

# 告诉 Fly.io 你的应用监听哪个端口
EXPOSE 3000

# 启动应用，并限制 Node 的内存使用以适应 256MB 机器
CMD ["node", "--max-old-space-size=200", "app.js"]