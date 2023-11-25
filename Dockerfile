FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM node:18-slim
COPY --from=build /app/dist/ /app/dist/
WORKDIR /app
ENTRYPOINT ["node", "./dist/serve.js"]
ENV PORT=8080
ENV HOSTNAME=0.0.0.0
EXPOSE $PORT
