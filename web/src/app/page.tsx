"use client";

import { useState } from "react";

export default function Home() {
  const [pengirim, setPengirim] = useState("");
  const [penerima, setPenerima] = useState("");
  const [barang, setBarang] = useState("");

  const submitResi = async () => {
    if (!pengirim || !penerima || !barang) {
      alert("Semua field wajib diisi");
      return;
    }

    const res = await fetch("http://localhost:4000/api/resi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pengirim,
        penerima,
        barang,
      }),
    });

    if (!res.ok) {
      alert("Gagal membuat resi");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow w-96">
        <h1 className="text-xl font-bold text-center mb-4">
          Cetak Resi
        </h1>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Pengirim"
          value={pengirim}
          onChange={(e) => setPengirim(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Penerima"
          value={penerima}
          onChange={(e) => setPenerima(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Barang"
          value={barang}
          onChange={(e) => setBarang(e.target.value)}
        />

        <button
          onClick={submitResi}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Buat & Cetak Resi
        </button>
      </div>
    </main>
  );
}
