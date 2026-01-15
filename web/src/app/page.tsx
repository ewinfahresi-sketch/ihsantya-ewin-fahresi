"use client";

import { useState } from "react";

export default function Home() {
  const [pengirim, setPengirim] = useState("");
  const [penerima, setPenerima] = useState("");
  const [barang, setBarang] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const submitResi = async () => {
    if (!pengirim || !penerima || !barang) {
      alert("Semua field wajib diisi");
      return;
    }

    const res = await fetch("http://localhost:4000/api/resi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pengirim, penerima, barang }),
    });

    if (!res.ok) {
      alert("Gagal membuat resi");
      return;
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    // simpan URL PDF untuk preview
    setPdfUrl(url);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">
          Cetak Resi Pengiriman
        </h1>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            className="border p-2 rounded"
            placeholder="Pengirim"
            value={pengirim}
            onChange={(e) => setPengirim(e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Penerima"
            value={penerima}
            onChange={(e) => setPenerima(e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Barang"
            value={barang}
            onChange={(e) => setBarang(e.target.value)}
          />
        </div>

        <button
          onClick={submitResi}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Buat Resi
        </button>

        {/* PREVIEW PDF */}
        {pdfUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Preview Resi</h2>

            <iframe
              src={pdfUrl}
              className="w-full h-[600px] border rounded"
            ></iframe>

            <div className="flex gap-4 mt-4">
              <a
                href={pdfUrl}
                download="resi.pdf"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Download PDF
              </a>

              <button
                onClick={() => window.open(pdfUrl)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cetak
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
