import { Router } from "express";
import { createResi, getResiById } from "../controllers/resi.controller";

const router = Router();

/**
 * POST /api/resi
 * - Simpan resi ke DB
 * - Generate PDF
 * - Kirim PDF ke client
 */
router.post("/", createResi);

/**
 * GET /api/resi/:id
 * - Ambil data resi berdasarkan ID
 */
router.get("/:id", getResiById);

export default router;
