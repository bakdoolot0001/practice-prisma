import buildServer from "./app";
import "dotenv/config";

const server = buildServer();

const startServer = () => {
  try {
    const PORT = process.env.PORT || 3000;
    server.listen({
      port: PORT,
      host: "0.0.0.0",
    }),
      () => {
        console.log(`${new Date().toLocaleTimeString()}`);
        console.log(`Server is running on http://localhost:${PORT}`);
      };
  } catch (error) {
    console.log(`Server crushed: ${error}`);
    process.exit(1)
  }
};

startServer();