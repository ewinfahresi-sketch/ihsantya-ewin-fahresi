export const createResi = async (data: {
  pengirim: string;
  penerima: string;
  barang: string;
}) => {
  const response = await fetch("http://localhost:3001/api/resi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Gagal membuat resi");
  }

  // API kirim PDF
  return await response.blob();
};
