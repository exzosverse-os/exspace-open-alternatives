# Stage 1  deps
FROM node:18-bullseye-slim AS deps
WORKDIR /app
# Copy package manifests to leverage Docker cache
COPY package.json package-lock.json* pnpm-lock.yaml* ./
# Use npm by default; adjust if you use pnpm/yarn
RUN npm ci --production=false --silent

# Stage 2  build
FROM node:18-bullseye-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build Next.js
RUN npm run build

# Stage 3  runner
FROM node:18-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
# Copy runtime artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public

# Use non-root user
RUN addgroup --system nextjs && adduser --system --ingroup nextjs nextjs
USER nextjs

EXPOSE 8080
CMD ["npm", "start"]
