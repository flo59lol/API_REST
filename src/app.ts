import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRouter from './routes/Product.js';

const app: Express = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, World!" });
});
app.use("/api", productRouter);

export default app;