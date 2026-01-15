# Aplikasi Cetak Resi Pengiriman
Project ini merupakan aplikasi Cetak Resi Pengiriman berbasis Web (Next.js) dan REST API (Express + TypeScript).  
Aplikasi ini dibuat untuk memenuhi kebutuhan pembelajaran pengembangan aplikasi web dan API.


# Arsitektur Project
Project ini menggunakan arsitektur terpisah antara Frontend dan Backend:

cetak-resi/
│
├── api/ # Backend (Express + TypeScript)
│ ├── src/
│ │ ├── routes/
│ │ │ └── resi.routes.ts
│ │ ├── services/
│ │ │ └── pdf.service.ts
│ │ └── server.ts
│ ├── package.json
│ └── tsconfig.json
│
├── web/ # Frontend (Next.js App Router)
│ ├── src/
│ │ └── app/
│ │ ├── page.tsx
│ │ └── services/
│ │ └── resi.service.ts
│ └── package.json
│
└── dokumentasi/ # Dokumentasi & Screenshot

# Teknologi yang Digunakan

# Backend (API)
- Node.js
- Express.js
- TypeScript
- CORS
- ts-node-dev

# Frontend (Web)
- Next.js (App Router)
- React
- TypeScript
- Fetch API

# Tools
- VS Code
- Apidog (API Documentation & Testing)
- Git

# Cara Menjalankan Project

# Menjalankan Backend (API)

Masuk ke folder `api`:

```bash
cd api
npm install
npm run dev

# Menjalankan Frontend (Web)

# Buka terminal baru, masuk ke folder web:

cd web
npm install
npm run dev