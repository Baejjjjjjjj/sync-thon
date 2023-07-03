"use strict";

const express = require ('express');
const router = express.Router();
import { output, process } from '../../controllers/home/boardController';

router.get('/', output.board);
router.post('/', process.write);

export default router;