FROM node:16-alpine

# Créer un répertoire de travail
WORKDIR /app

COPY . .

# Exposer le port de l'application
EXPOSE 5173

# Commande pour démarrer l'application en mode développement
CMD ["sh", "entrypoint.sh"]
