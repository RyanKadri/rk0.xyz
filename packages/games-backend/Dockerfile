FROM node:11 as node-builder
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY ./tsconfig.json /app/
COPY ./src/ /app/src
RUN ls 
RUN npx tsc --project ./tsconfig.json

FROM node:11-alpine as node-backend
WORKDIR /app
COPY --from=node-builder /app/dist/src /app/
COPY --from=node-builder /app/node_modules /app/node_modules
EXPOSE 8080
CMD ["node", "./games.js"]