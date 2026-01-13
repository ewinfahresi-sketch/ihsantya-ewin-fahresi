import { Router } from "express";
import { createResi } from "../controllers/resi.controller";

const router = Router();

router.post("/", createResi);

export default router;
