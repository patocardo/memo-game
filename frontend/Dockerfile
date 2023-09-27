# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Anonymous volume for node_modules
VOLUME /app/node_modules

# The default command to run the app
CMD ["npm", "run", "dev"]
