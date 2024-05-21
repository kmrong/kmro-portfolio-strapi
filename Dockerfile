# Use the official Strapi base image
FROM strapi/strapi

# Set your workdir
WORKDIR /usr/src/api

# Copy your Strapi app
COPY . .

# Expose the Strapi port
EXPOSE 1337

# Run Strapi
CMD ["npm", "start"]
