import { Router } from "express";
import { createResi, getResiById } from "../controllers/resi.controller";

const router = Router();

router.post("/", createResi);
router.get("/:id", getResiById);

export default router;