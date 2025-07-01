# Backend build for server/
FROM node:18

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server .

EXPOSE 5000  # or the backend port you're using

CMD ["npm", "start"]
