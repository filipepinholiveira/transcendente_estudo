import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Servir arquivos estáticos da pasta 'public' (ou onde estiver seu CSS)
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

// Serve o arquivo index.html da raiz do projeto
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// Servir o CSS gerado pelo Tailwind da pasta 'dist'
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
