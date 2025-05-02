import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Serve o arquivo index.html da raiz do projeto
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir o CSS gerado pelo Tailwind da pasta 'dist'
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
