import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Test route is working!");
});
router.get("/hello", (req, res) => {
  res.send("Hello from the test route!");
});

export default router;

