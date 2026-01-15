export async function createResi(data: {
  pengirim: string;
  penerima: string;
  barang: string;
}) {
  const res = await fetch("http://localhost:3001/api/resi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Gagal membuat resi");
  }

  return res.blob(); // karena API kirim PDF
}