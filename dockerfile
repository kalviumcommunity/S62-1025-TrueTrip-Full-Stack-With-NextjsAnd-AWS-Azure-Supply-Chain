# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first and install dependencies
COPY truetrip/package*.json ./truetrip/
RUN npm install --prefix ./truetrip

# Copy the rest of the project files
COPY . .

# Build the app
RUN npm run build --prefix ./truetrip

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start", "--prefix", "./truetrip"]
