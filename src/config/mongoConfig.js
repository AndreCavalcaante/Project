import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const conectarAoBancoDeDados = async () => {
    try {
        const client = new MongoClient(process.env.CONNECTION_STRING);
        await client.connect();
        console.log('Conectado ao MongoDB!');
        return client;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

export default conectarAoBancoDeDados;
