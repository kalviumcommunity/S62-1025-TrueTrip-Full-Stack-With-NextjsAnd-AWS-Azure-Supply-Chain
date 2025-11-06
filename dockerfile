# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app/truetrip

# Copy package.json and package-lock.json
COPY truetrip/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY truetrip/ ./

# Generate Prisma client (correct path)
RUN npx prisma generate --schema=./src/app/prisma/schema.prisma

# Build Next.js app
RUN npm run build

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
