"use strict";

const express = require ('express');
const router = express.Router();
import { output, process } from '../../controllers/home/boardController';

router.get('/', output.board);
router.post('/', process.write);
router.post('/password', process.passwordConfirm);
router.post('/:id', output.boardDetail);

export default router;