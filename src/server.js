import express from "express";
import dotenv from "dotenv";
import  router  from "./routes/routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(router);



app.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})