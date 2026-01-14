import app from "./app";

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});

import prisma from "./lib/prisma";

app.get("/test-db", async (_req, res) => {
  const count = await prisma.resi.count();
  res.json({ message: "DB OK", totalResi: count });
});