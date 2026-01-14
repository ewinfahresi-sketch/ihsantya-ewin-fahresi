-- CreateTable
CREATE TABLE "Resi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "noResi" TEXT NOT NULL,
    "pengirim" TEXT NOT NULL,
    "penerima" TEXT NOT NULL,
    "barang" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Resi_noResi_key" ON "Resi"("noResi");
