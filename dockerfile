# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps --omit=dev

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_PUBLIC_GRAPHQL_BHN=http://185.60.136.35:8000/graphql/
ENV NEXT_PUBLIC_BHN=http://185.60.136.35:8000
ENV NEXT_PUBLIC_LOGIN_URL=http://185.60.136.35:8000/auth/login/
ENV NEXT_PUBLIC_REFRESH_TOKEN_URL=http://185.60.136.35:8000/auth/token/refresh/
ENV NEXT_PUBLIC_SIGNUP_URL=http://185.60.136.35:8000/auth/register/

RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
