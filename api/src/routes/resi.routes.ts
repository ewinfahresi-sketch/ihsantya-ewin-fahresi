import { Router, Request, Response } from "express";

const router = Router();

/**
 * POST /api/resi
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const { pengirim, penerima, barang } = req.body;

    // validasi sederhana
    if (!pengirim || !penerima || !barang) {
      return res.status(400).json({
        success: false,
        message: "pengirim, penerima, dan barang wajib diisi",
      });
    }

    // sementara: response dummy
    return res.status(201).json({
      success: true,
      message: "POST RESI WORKS",
      data: {
        pengirim,
        penerima,
        barang,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;
