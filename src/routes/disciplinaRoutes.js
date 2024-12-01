import express from 'express';
import {
    listarDisciplinas,
    obterDisciplina,
    criarNovaDisciplina,
    atualizarDisciplinaExistente,
    excluirDisciplinaPorId,
} from '../controllers/disciplinaController.js';

const router = express.Router();

router.get('/disciplinas', listarDisciplinas);
router.get('/disciplinas/:id', obterDisciplina);
router.post('/disciplinas', criarNovaDisciplina);
router.put('/disciplinas/:id', atualizarDisciplinaExistente);
router.delete('/disciplinas/:id', excluirDisciplinaPorId);

export default router;
