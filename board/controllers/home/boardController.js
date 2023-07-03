"use strict";

const express = require('express');
import Board from '../../models/Board';


const output = {
    /** 게시글 리스트 가져오기 */
    board : async (req, res) => {
        const board = new Board();
        const boardList = await board.getBoardList();
        res.json(boardList);
    }
};

const process = {
    /**pm 게시글 작성 */
    write : async(req, res) => {
        const board = new Board();
        const boardWriteRes = await board.write(req.body);
        res.send({ success : 200 });
    },
    passwordConfirm : async(req, res) => {
        const board = new Board();
        const boardPassRes = await board.passwordConfirm(req.body);
        res.send(boardPassRes);
    }
};


export { output, process };