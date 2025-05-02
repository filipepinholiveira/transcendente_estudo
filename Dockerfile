# Use a imagem oficial do Node.js como base
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências do projeto (isso inclui o express e outras dependências)
RUN npm install

# Instale o ts-node globalmente
RUN npm install -g ts-node

# Instale o express e suas definições de tipos como dependência local
RUN npm install express @types/express

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Exponha a porta 3000 do contêiner (se necessário)
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "run", "dev"]
