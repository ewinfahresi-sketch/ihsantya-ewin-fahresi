// routes/resi.routes.ts
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { pengirim, penerima, barang } = req.body;

    // Simpan ke database SQLite melalui Prisma
    const dataBaru = await prisma.resi.create({
      data: {
        noResi: `RESI-${Date.now()}`, // update
        pengirim,
        penerima,
        barang,
    },
    });

    // Mengirim respon teks sederhana untuk dicetak
    const struk = `RESI: ${dataBaru.id}\nDari: ${pengirim}\nKe: ${penerima}\nBarang: ${barang}`;
    
    res.setHeader("Content-Type", "text/plain");
    res.send(struk);
  } catch (error) {
    res.status(500).json({ error: "Gagal memproses resi" });
  }
});

export default router;