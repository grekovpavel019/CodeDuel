import express, { type Express, type Request, type Response} from "express"
import cors from "cors"

const app: Express = express();

app.use(cors())
app.use(express.json());

app.post("/code", (req: Request, res: Response) => {
    const code: string = req.body.code;

    console.log(code);
});

app.listen(3000, "127.0.0.1", () => {
    console.log("Сервер запущен");
})