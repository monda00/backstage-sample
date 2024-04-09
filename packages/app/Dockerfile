# The purpose of this image is to serve the frontend app content separately.
# By default the Backstage backend uses the app-backend plugin to serve the
# app from the backend itself, but it may be desirable to move the frontend
# content serving to a separate deployment, in which case this image can be
# used.

# USAGE:
#
# - Copy this file and the "docker" folder from this directory to your project
#   root
#
# - Update your .dockerignore, make sure that the source folders are not
#   excluded, but do exclude node_modules and build artifacts:
#
#       .git
#       node_modules
#       packages/*/dist
#       packages/*/node_modules
#       plugins/*/dist
#       plugins/*/node_modules
#
# - Update the copy of this file to add configuration arguments to the "build"
#   command, for example:
#
#       RUN yarn workspace app build --config <config1> --config <config2> ...
#
# - In your project root, run:
#
#       docker build -t backstage-frontend -f Dockerfile.dockerbuild .


FROM node:18-bookworm-slim AS build

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN yarn install
COPY app-config.yaml ./
COPY app-config.production.yaml ./
RUN yarn workspace app build --config ../../app-config.yaml --config ../../app-config.production.yaml


FROM nginx:mainline

RUN apt-get update && apt-get -y install jq && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/packages/app/dist /usr/share/nginx/html
COPY packages/app/docker/default.conf.template /etc/nginx/templates/default.conf.template

COPY packages/app/docker/inject-config.sh /docker-entrypoint.d/40-inject-config.sh

ENV PORT 80