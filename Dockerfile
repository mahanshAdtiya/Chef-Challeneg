FROM node:alpine3.18 AS build

# Set the working directory
WORKDIR /chefchallenge

# Copy only the package files for dependency installation
COPY package*.json /chefchallenge

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . /chefchallenge

# Build the application
RUN npm run build

# Install serve globally to serve the static files
RUN npm install -g serve

# Expose the port for the application
EXPOSE 4015

# Start the application with serve
CMD ["serve", "-s", "-l", "4015", "dist/"]
