import app from "./app";

import testRouter from "./Routes/TestRoutes";
app.use("/test", testRouter);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

