import PDFDocument from "pdfkit";

export function generateResiPDF(data: any): Promise<Buffer> {
  return new Promise((resolve) => {
    const doc = new PDFDocument({
      size: [283, 425], // 10x15 cm
      margin: 12
    });

    const buffers: any[] = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => resolve(Buffer.concat(buffers)));

    doc.fontSize(14).text("RESI PENGIRIMAN", { align: "center" });
    doc.moveDown();
    doc.fontSize(10);
    doc.text(`Pengirim : ${data.pengirim}`);
    doc.text(`Penerima : ${data.penerima}`);
    doc.text(`Barang   : ${data.barang}`);

    doc.end();
  });
}
