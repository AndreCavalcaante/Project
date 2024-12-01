import {
    obterTodasDisciplinas,
    obterDisciplinaPorId,
    criarDisciplina,
    atualizarDisciplina,
    excluirDisciplina,
} from '../models/disciplinaModel.js';

export const listarDisciplinas = async (req, res) => {
    try {
        const disciplinas = await obterTodasDisciplinas();
        res.status(200).json(disciplinas);
    } catch (erro) {
        console.error('Erro ao buscar disciplinas:', erro.message);
        res.status(500).json({ erro: 'Erro ao buscar disciplinas.' });
    }
};

export const obterDisciplina = async (req, res) => {
    const id = req.params.id;
    try {
        const disciplina = await obterDisciplinaPorId(id);
        if (!disciplina) {
            return res.status(404).json({ erro: 'Disciplina não encontrada.' });
        }
        res.status(200).json(disciplina);
    } catch (erro) {
        console.error('Erro ao buscar disciplina:', erro.message);
        res.status(500).json({ erro: 'Erro ao buscar disciplina.' });
    }
};

export const criarNovaDisciplina = async (req, res) => {
    const novaDisciplina = req.body;
    try {
        const resultado = await criarDisciplina(novaDisciplina);
        res.status(201).json(resultado);
    } catch (erro) {
        console.error('Erro ao criar disciplina:', erro.message);
        res.status(500).json({ erro: 'Erro ao criar disciplina.' });
    }
};

export const atualizarDisciplinaExistente = async (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    try {
        const resultado = await atualizarDisciplina(id, dadosAtualizados);
        res.status(200).json(resultado);
    } catch (erro) {
        console.error('Erro ao atualizar disciplina:', erro.message);
        res.status(500).json({ erro: 'Erro ao atualizar disciplina.' });
    }
};

export const excluirDisciplinaPorId = async (req, res) => {
    const id = req.params.id;
    try {
        const resultado = await excluirDisciplina(id);
        res.status(200).json(resultado);
    } catch (erro) {
        console.error('Erro ao excluir disciplina:', erro.message);
        res.status(500).json({ erro: 'Erro ao excluir disciplina.' });
    }
};
