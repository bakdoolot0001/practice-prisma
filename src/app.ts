import express from "express";
import globalRouter from "./routes/route";

const buildServer = () => {
  const server = express();

  server.use(express.json());

  server.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Server runned successfully!",
    });
  });

  server.use("/api", globalRouter);

  return server;
};

export default buildServer;
