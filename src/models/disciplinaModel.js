import { ObjectId } from 'mongodb';
import conectarAoBancoDeDados from '../config/mongoConfig.js';

const client = await conectarAoBancoDeDados();
const db = client.db('Disciplina');
const colecao = db.collection('Disciplinas');

// Obter todas as disciplinas
export const obterTodasDisciplinas = async () => {
    return colecao.find().toArray();
};

// Obter disciplina por ID
export const obterDisciplinaPorId = async (id) => {
    return colecao.findOne({ _id: new ObjectId(id) });
};

// Criar uma nova disciplina
export const criarDisciplina = async (novaDisciplina) => {
    return colecao.insertOne(novaDisciplina);
};

// Atualizar uma disciplina por ID
export const atualizarDisciplina = async (id, dadosAtualizados) => {
    return colecao.updateOne({ _id: new ObjectId(id) }, { $set: dadosAtualizados });
};

// Excluir uma disciplina por ID
export const excluirDisciplina = async (id) => {
    return colecao.deleteOne({ _id: new ObjectId(id) });
};
