import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/test-db", async (req, res) => {
  try {
    const count = await prisma.resi.count();
    res.json({ message: "DB OK", totalResi: count });
  } catch (error: unknown) { // Definisikan sebagai unknown secara eksplisit
    // SOLUSI: Periksa apakah error adalah objek Error yang valid
    if (error instanceof Error) {
      res.status(500).json({ message: "DB Error", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});

export default router;