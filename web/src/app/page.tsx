"use client";

import { useState } from "react";
import { createResi } from "../services/resi.service";

export default function HomePage() {
  // STATE FORM
  const [pengirim, setPengirim] = useState("");
  const [penerima, setPenerima] = useState("");
  const [barang, setBarang] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLER SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const pdfBlob = await createResi({
        pengirim,
        penerima,
        barang,
      });

      // buka PDF di tab baru
      const url = window.URL.createObjectURL(pdfBlob);
      window.open(url);
    } catch (error) {
      alert("Gagal membuat resi");
    } finally {
      setLoading(false);
    }
  };

  // TAMPILAN
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">
          Cetak Resi
        </h1>

        {/* Pengirim */}
        <input
          type="text"
          placeholder="Nama Pengirim"
          className="w-full border p-2 mb-3 rounded"
          value={pengirim}
          onChange={(e) => setPengirim(e.target.value)}
        />

        {/* Penerima */}
        <input
          type="text"
          placeholder="Nama Penerima"
          className="w-full border p-2 mb-3 rounded"
          value={penerima}
          onChange={(e) => setPenerima(e.target.value)}
        />

        {/* Barang */}
        <textarea
          placeholder="Detail Barang"
          className="w-full border p-2 mb-4 rounded"
          value={barang}
          onChange={(e) => setBarang(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Buat Resi"}
        </button>
      </div>
    </main>
  );
}
