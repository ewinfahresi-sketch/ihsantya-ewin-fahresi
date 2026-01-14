import PDFDocument from "pdfkit";
import { Resi } from "@prisma/client";

export function generateResiPDF(resi: Resi): Promise<Buffer> {
  return new Promise((resolve) => {
    const doc = new PDFDocument({
      size: [283, 425], // 10 x 15 cm
      margin: 20,
    });

    const buffers: Buffer[] = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      resolve(Buffer.concat(buffers));
    });

    doc.fontSize(14).text("RESI PENGIRIMAN", { align: "center" });
    doc.moveDown();

    doc.fontSize(10).text(`No Resi     : ${resi.noResi}`);
    doc.text(`Pengirim   : ${resi.pengirim}`);
    doc.text(`Penerima   : ${resi.penerima}`);
    doc.text(`Barang     : ${resi.barang}`);
    doc.text(`Tanggal    : ${resi.createdAt.toLocaleString()}`);

    doc.end();
  });
}
