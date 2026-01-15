import express from "express";
import cors from "cors";
import resiRoutes from "./routes/resi.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resi", resiRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});