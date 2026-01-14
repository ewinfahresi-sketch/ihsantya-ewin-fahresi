import express from "express";
import cors from "cors";
import resiRoutes from "./routes/resi.routes";

const app = express();
const PORT = 4000;

// middleware wajib
app.use(cors());
app.use(express.json()); // <--- PENTING untuk parsing JSON body
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.json({ status: "API OK" });
});

// routes
app.use("/api/resi", resiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

