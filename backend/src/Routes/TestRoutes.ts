import app from "../app";

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

