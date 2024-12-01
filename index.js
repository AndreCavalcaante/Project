import express from 'express';
import disciplinaRoutes from './src/routes/disciplinaRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Rotas
app.use(disciplinaRoutes);

// Porta dinâmica ou 3000 para local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});