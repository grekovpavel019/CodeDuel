import express, { type Express, type Request, type Response} from "express"

const app: Express = express();

app.post("/code", (req: Request, res: Response) => {
    console.log("123");
});

app.listen(3000, "127.0.0.1", () => {
    console.log("Сервер запущен")
})