import express from "express"
import compression from "compression"
import methodOverride from "method-override"
import cors from "cors"
import userRouter from "../user/userRouter";
const app = express(); //express 객체를 만들어 준다.

app.use(compression());
//json형태의 데이터를 처리하기 위한 코드 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(methodOverride());
app.use(cors());

app.use('/user',userRouter);


import boardRouter from "../board/routes/home/board"
app.use('/board', boardRouter);


export default app; 