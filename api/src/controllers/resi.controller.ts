import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { generateResiPDF } from "../services/pdf.service";

export const createResi = async (req: Request, res: Response) => {
  try {
    const { pengirim, penerima, barang } = req.body;

    // Validasi input
    if (!pengirim || !penerima || !barang) {
      return res.status(400).json({
        success: false,
        message: "pengirim, penerima, dan barang wajib diisi",
      });
    }

    // Simpan ke database
    const resi = await prisma.resi.create({
      data: {
        noResi: "RESI-" + Date.now(),
        pengirim,
        penerima,
        barang,
      },
    });

    // Generate PDF (HARUS return Buffer)
    const pdfBuffer = await generateResiPDF(resi);

    // Kirim PDF ke client
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=resi-${resi.noResi}.pdf`
    );

    return res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Gagal membuat resi",
    });
  }
};

export const getResiById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const resi = await prisma.resi.findUnique({
      where: { id },
    });

    if (!resi) {
      return res.status(404).json({
        success: false,
        message: "Resi tidak ditemukan",
      });
    }

    return res.json({
      success: true,
      data: resi,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error mengambil resi",
    });
  }
};
