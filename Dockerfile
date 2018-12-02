FROM node:current-slim

COPY api api/
COPY bot bot/
COPY lib lib/
COPY model model/
COPY frontend frontend/
COPY public public/
COPY schema schema/
COPY babel.config.js .
COPY package.json .
COPY package-lock.json .
COPY start.mjs .
COPY webpack.config.js .

RUN npm install
RUN npm run prestart

CMD [ "node", "--experimental-modules", "start.mjs" ]
