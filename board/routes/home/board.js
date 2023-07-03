"use strict";

const express = require ('express');
const router = express.Router();
import { output, process } from '../../controllers/home/boardController';

router.get('/', output.board);
router.post('/', process.write);
router.post('/password', process.passwordConfirm);
router.get('/search', output.search);
router.get('/link/:id', output.boardLink)


export default router;