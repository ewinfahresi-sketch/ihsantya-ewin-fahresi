import { Request, Response } from "express";
import { generateResiPDF } from "../services/pdf.service";

export const createResi = async (req: Request, res: Response) => {
  try {
    const pdf = await generateResiPDF(req.body);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=resi.pdf");
    res.send(pdf);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat resi" });
  }
};