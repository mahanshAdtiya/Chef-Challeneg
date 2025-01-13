# Step 1: Build the app using Node.js
FROM node:20.9.0-alpine AS build

WORKDIR /chefchallenge
COPY . /chefchallenge
RUN npm install
RUN npm run build

# Step 2: Set up Nginx to serve the static files
FROM nginx:alpine

# Copy the built files from the previous stage to Nginx's HTML directory
COPY --from=build /chefchallenge/dist /usr/share/nginx/html/chefchallenge

# Copy the custom Nginx configuration (nginx.conf)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (Nginx default)
EXPOSE 4015

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
