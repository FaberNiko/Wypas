FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm install @swc/core-linux-x64-gnu
EXPOSE 1337
CMD ["npm", "run", "develop"]