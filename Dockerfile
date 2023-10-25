# Use an official Node.js runtime as the base image
FROM node:latest

# Create and set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application files to the working directory
COPY . .

# Expose the port your application will run on
EXPOSE 8080

# Define the command to start your application
CMD [ "node", "index.js" ]
