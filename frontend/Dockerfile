# client/Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN mkdir -p node_modules
RUN chown -R node:node node_modules

COPY --chown=node:node ./frontend/package*.json ./
COPY --chown=node:node ./frontend/.npmrc ./

USER node

# RUN npm install --no-optional && npm cache clean --force
RUN npm install && npm cache clean --force

# this stage copies in the frontend's source code and uses NPM to build a bundle
FROM base AS bundled

USER root

RUN mkdir dist
RUN chown -R node:node dist

COPY --chown=node:node ./frontend/src ./src
COPY --chown=node:node ./frontend/public ./public
COPY --chown=node:node ./frontend/*ts ./
COPY --chown=node:node ./frontend/*js ./
COPY --chown=node:node ./frontend/*json ./
COPY --chown=node:node ./frontend/*yml ./
COPY --chown=node:node ./frontend/*html ./


USER node

# Copy source code
# COPY . .

# Expose Vite's default port (5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
