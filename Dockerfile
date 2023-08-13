FROM cypress/base AS motorway-express
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
COPY ./.env_production ./.env
EXPOSE 3000
CMD ["node", "app.js"]
