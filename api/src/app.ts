import express from "express";
import cors from "cors";
import resiRoute from "./routes/resi.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/resi", resiRoute);

export default app;