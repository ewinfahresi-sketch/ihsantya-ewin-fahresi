console.log("SERVER FILE LOADED"); // ← update kode
import express from "express";
import cors from "cors";
import resiRoutes from "./routes/resi.routes";

console.log("RESI ROUTES LOADED"); // ← update kode
const app = express();
const PORT = 4000;

// Middleware update kode
app.use("/api/resi", resiRoutes); // ← update kode
app.use(cors());
app.use(express.json());

// Routing 
// Sekarang /test-db bisa diakses di /api/resi/test-db
app.use("/api/resi", resiRoutes);

// Menjalankan Server
app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
  console.log(`🔗 Test DB: http://localhost:${PORT}/api/resi/test-db`);
});