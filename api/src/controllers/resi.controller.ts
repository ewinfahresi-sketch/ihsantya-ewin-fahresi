import { Request, Response } from "express";
import { generateResiPDF } from "../services/pdf.service";
import prisma from "../lib/prisma";

export const createResi = async (req: Request, res: Response) => {
  try {
    const { pengirim, penerima, barang } = req.body;

    // Simpan resi ke database
    const resi = await prisma.resi.create({
      data: {
        noResi: "RESI-" + Date.now(),
        pengirim,
        penerima,
        barang
      }
    });

    // Generate PDF dari data resi
    const pdf = await generateResiPDF(resi);

    // Kirim PDF ke client
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=resi.pdf");
    res.send(pdf);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat resi" });
  }
};

export const getResiById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const resi = await prisma.resi.findUnique({
      where: { id }
    });

    if (!resi) {
      return res.status(404).json({ message: "Resi tidak ditemukan" });
    }

    res.json(resi);
  } catch (error) {
    res.status(500).json({ message: "Error mengambil resi" });
  }
};
