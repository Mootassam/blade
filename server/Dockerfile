FROM node:14.16.0-alpine3.13
WORKDIR /app
COPY package*.json /app/
COPY . /app/
RUN npm install
#RUN npm ci --only=production
#RUN  npm install --production --silent && mv node_modules ../
# ENV BACKEND_URL="http://localhost:8080/api"
ENV BACKEND_URL="http://139.162.166.136:8080/api"
# ENV BACKEND_URL="http://localhost:8080/api"
EXPOSE 8080
CMD ["npm", "start"]
