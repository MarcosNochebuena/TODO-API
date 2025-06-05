FROM node:20.19.2-alpine
# Crear directorio de la aplicación
WORKDIR /usr/src/app

#  Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
